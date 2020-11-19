const Usuario = require('../../models/usuario')

module.exports = {
    listar: function(req, res){
        Usuario.find(function (err,user){
            if (!user) {res.json({msg: 'no se encontro usuario'}) }
            res.json({data: user})
        })
    },
    crear: function(req, res){
        const usuarioNew = new Usuario({
            nombre:req.body.nombre,
            apellido: req.body.apellido
        })
        usuarioNew.save(function(err,usuarioGuardado){
            if(err){ res.json({msg:'sucedio un error al guardar'})}
            res.json({msg:'exito al crear usuario',userNew:usuarioGuardado})
        })
    },
    eliminar: function(req, res){
        Usuario.findById(req.body.id, function(err,usuarioEncontrado){
            if (!usuarioEncontrado) {
                res.json({msg:'no se encontro el usuario'})
            }
            usuarioEncontrado.remove();
            res.json({msg:'exito al eliminar',usuarioEliminado:usuarioEncontrado})
        })
    },
    actualizar: function(req, res){
        Usuario.findByIdAndUpdate(req.body.id,{nombre:req.body.nombre},function(err,usuarioActualizado){
            if (!usuarioActualizado)  res.json({msg:'no se encontro usuario a actualizar'})
            res.json({msg:'exito al actualizar', dataActualizada: usuarioActualizado})
        })
    }
}