const express = require('express')
const router = express.Router()
const Patient = require('./models/patient')

router.get('/', async(req, res) => {
    try{
        const patient = await patient.find()
        res.json(patients)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const patient = await patient.findById(req.params.id)
        res.json(patient)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const patient = new Patient({
        patientID: req.body.patientID,
        name: req.body.name,
        
    })

    try{
        const b1 = await patient.save()
        res.json(b1)
    }catch(err){
        res.send(err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const patient = await Patient.findById(req.params.id) 
        alien.sub = req.body.sub
        const b1 = await patient.save()
        res.json(b1)   
    }catch(err){
        res.send('Error')
    }

})