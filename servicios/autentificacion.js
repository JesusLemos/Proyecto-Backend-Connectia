const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const conSecreta = process.env.JWT_SECRET || 'ADLSNVLSNDLKNVSDFT';

async function contrasenyaConHash(contrasenya){
    return await bcrypt.hash(contrasenya, 10)
}

async function compararContrasenya(contrasenya, hash){
    return await bcrypt.compare(contrasenya, hash)
}

async function crearJWT(data){
    return jwt.sign(data, conSecreta);
}

async function decodeJWT(token){
    return jwt.verify(token, conSecreta)
}

 function comprobarContrasenya(contrasenya){
   
    // const numeroCaracteres = contrasenya.length >= 8;
}
module.exports = {
    contrasenyaConHash,
    compararContrasenya,
    crearJWT,
    decodeJWT,
    comprobarContrasenya
}