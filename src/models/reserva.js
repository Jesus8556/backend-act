const mongoose = require("mongoose")

const reservaSchema = mongoose.Schema(
    {
        fecha: {
            type: Date,
            default:Date.now,
            required:true
        },
        startTime:{
            type:Date,
            required:true
        },
        endTime: {
            type: Date,
            required: true
        },
        status:{
            type:String,
            required: true
        },
        user:{
            ref:"User",
            type:mongoose.Schema.Types.ObjectId

        },
        garage:{
            ref:"Garage",
            type:mongoose.Schema.Types.ObjectId
        },
        propietario:{
            ref:"User",
            type:mongoose.Schema.Types.ObjectId
        }
    },{
        timestamps:true,
        versionkey:false
    }
) 

const Reserva = mongoose.model('Reserva',reservaSchema);

module.exports = {
    Reserva
}