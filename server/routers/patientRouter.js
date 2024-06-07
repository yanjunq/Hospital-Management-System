const express = require('express')
const patientoRouter = express.Router()
const { getAllPatients, deletePatientByID } = require('../controllers/patientController');

patientoRouter.get('/', getAllPatients);

patientoRouter.get('/:doctorID', deletePatientByID);

module.exports = patientoRouter;