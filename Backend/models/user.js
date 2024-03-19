const db = require('../config/config')
const brcypt = require('bcrypt');


const User = {}

User.findById = (id, result) => {
    const sql = `
        SELECT
        id,
        email,
        name,
        lastname,
        image,
        password
        FROM
        isers
        WHERE
            id = ?
    `;

    db.query(
        sql,
        [id],
        (err, res) => {
            if(err){
                console.log('Errr ' , err);
                result(err, null);
            }else{
                console.log('Nuevo usuario: ', res);
                result(null, res);
            }
        }
    )
}


User.findByEmail = (email, result) => {
    const sql = `
        SELECT
        id,
        email,
        name,
        lastname,
        image,
        pass
        FROM
        usuario
        WHERE
            email = ?
    `;

    db.query(
        sql,
        [email],
        (err, res) => {
            if(err){
                console.log('Errr ' , err);
                result(err, null);
            }else{
                console.log('Nuevo usuario: ', res);
                result(null, res[0]);
            }
        }
    )
}

User.create = async (user, result) => {
    console.log(JSON.stringify(user))

    const hash = await brcypt.hash(user.password, 10)

    const sentenciaSQL = `
        insert into usuario(
            email, name, lastname, phone, image, pass, created_at, updated_at
        )
        values ( ?, ?, ?, ?, ?, ?, ?, ? )
    `;
    db.query(
        sentenciaSQL,
        [
            user.email,
            user.name,
            user.lastname | 'Nada',
            user.phone,
            user.image,
            hash,
            new Date(),
            new Date()
        ],
        (err, res) => {
            if(err){
                console.log("error create ", err);
                result(err, null);
            } else {
                console.log('id del usuario nuevo: ' , res.insertId);
                result(null, res.insertId);
            }
        }
        )
}

module.exports = User;