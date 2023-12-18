const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({

    patientID:{
        type: String,
        required:true
    },
    surName:{
        type: String,
        required:true
    },
    otherNames:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    number:{
        type:Number,
        required: true
    },
    residentialAddress:{
        type:String,
        required: true
    },
    emergencyContactName:{
        type:String,
        required: true
    },
    emergencyContactNumber:{
        type:Number,
        required: true
    },
    relationshipWithPatient:{
        type:String,
        required: true
    } = req.body
    
})

const patient = mongoose.model('register_patient', PatientSchema);
model.exports = patient