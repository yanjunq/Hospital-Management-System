const express = require('express')
const doctorRouter = express.Router()
const { getAllDoctor, deleteDoctorByID } = require('../controllers/doctorController');

doctorRouter.get('/', getAllDoctor);

doctorRouter.get('/:doctorID', deleteDoctorByID);

module.exports = doctorRouter;
