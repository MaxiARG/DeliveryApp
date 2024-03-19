const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app);

const logger = require('morgan');
const cors = require('cors');

const passport = require('passport')

const usersRoutes = require('./routes/userRoutes');


const port = process.env.PORT || 3000;
app.set('port', port);

app.use(logger('dev'))
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize())
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');

usersRoutes(app)


server.listen(3000, '192.168.56.1', () => {
    console.log("arranco")
});

app.get('/', (req, res) => {
    res.send('ruta raiz');
})

app.get('/api/stub', (req, res) => {
    const user = req.body; //capturo datos del cliente
    return res.status(201).json({
        success: true,
        mensaje: 'El realizo la reserva exitosamente',
        status: 201,
        data: {    qr2: 123, fechaHora: new Date()}
    })
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
})


