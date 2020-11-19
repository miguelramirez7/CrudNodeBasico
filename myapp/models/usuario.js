const mongoose  =require('mongoose')
const Schema = mongoose.Schema

var UsuarioSchema =  new Schema({
    nombre: String,
    apellido:String
})

module.exports = mongoose.model('Usuario',UsuarioSchema)