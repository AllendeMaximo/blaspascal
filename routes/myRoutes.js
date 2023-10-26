const express = require('express')
const router = express.Router();
const direcciones = require('../controller/direcciones')

router.route('/').get(direcciones.empresas)
router.route("/empresas").get(direcciones.empresas)
router.route("/empresas/:month").get(direcciones.filter)


module.exports = router