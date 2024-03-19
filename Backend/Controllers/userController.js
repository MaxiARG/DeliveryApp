const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const keys = require('../config/keys')

module.exports = {
     login(req, res){
        const email = req.body.email;
        const pass = req.body.password;

        User.findByEmail(email,async (err, myUser) => {
            if(err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el email del usuario',
                    error: err
                })
            } 

            if(!myUser){
                return res.status(401).json({
                    success: false,
                    message: 'Cliente no autorizado / email no encontrado',
                    error: err
                })
            }
            const isPasswordValid = await bcrypt.compare(pass, myUser.pass);
            if(isPasswordValid){
                const token = jwt.sign({id: myUser.id, email: myUser.email}, keys.secretOrKey, {} );

                const data ={
                    id: myUser.id,
                    name: myUser.name,
                    lastName : myUser.lastName,
                    email: myUser.email,
                    phone: myUser.phone,
                    image: myUser.image,
                    session_token: `JWT ${token}`
                }

                return res.status(201).json({
                    success: true,
                    message: 'El usuario fue autenticado',
                    data: data 
                })
            }else{
                return res.status(401).json({
                    success: false,
                    message: 'Pass o Usuario incorrectos',
                })
            }

            
        } )
    }
,
    register(req, res){
        const user = req.body; //capturo datos del cliente
        
        User.create(user, (err, data) => {
            if(err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                })
            } 

            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: data // id del nuevo usuario
            })
            
        })
    }
}