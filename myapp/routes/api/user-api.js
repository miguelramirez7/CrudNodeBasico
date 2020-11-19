var express = require('express');
const router = express.Router();
const usuarioController = require('../../controller/api/usuarioController')

router.get('/listar',usuarioController.listar)
router.post('/crear',usuarioController.crear)
router.post('/actualizar',usuarioController.actualizar)
router.delete('/eliminar',usuarioController.eliminar)

module.exports = router