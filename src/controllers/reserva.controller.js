const { Reserva } = require("../models/reserva")


const createReserva = async (req,res) =>{
    const {fecha,startTime,endTime,status,garage} = req.body
    const newReserva = new Reserva({
        fecha,
        startTime,
        endTime,
        status,
        user:req.userId,
        garage
    })
    const reservaSave = await newReserva.save()

    res.status(201).json(reservaSave)

}

const getReserva = async (req,res) =>{
    try {
        const reserva = await Reserva.find()
        res.json(reserva)
    } catch (error) {
        console.error('Error al obtener reserva:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
}

const getReservaById = async (req,res) =>{
    
}

const updateReserva = async (req,res) =>{
    
}

const deleteReserva = async (req,res) =>{
    
}

module.exports = {
    createReserva,
    getReserva,
    getReservaById,
    updateReserva,
    deleteReserva
}