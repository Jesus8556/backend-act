const express = require("express")
const router = express.Router()
const {verificar} = require("../middlewares/index.js")
const reservaController = require("../controllers/reserva.controller.js")
const verify = verificar.verifyToken


router.post("/",verify,reservaController.createReserva)

router.get("/",verify,reservaController.getReserva)

router.get("/:reservaId",reservaController.getReservaById)

router.put("/:reservaId",verify,reservaController.updateReserva)

router.delete("/:reservaId",verify,reservaController.deleteReserva)



module.exports = router