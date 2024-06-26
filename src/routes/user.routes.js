const express = require("express")
const router = express.Router()
const propuestaController = require("../controllers/propuesta.controller.js")
const {verificar} = require("../middlewares/index.js")
const verify = verificar.verifyToken


router.post("/",verify,propuestaController.createPropuesta)

router.get("/",verify,propuestaController.getPropuesta)

router.get("/:propuestaId",propuestaController.getPropuestaById)

router.put("/:propuestaId",verify,propuestaController.updatePropuesta)

router.delete("/:propuestaId",verify,propuestaController.deletePropuesta)


module.exports = router