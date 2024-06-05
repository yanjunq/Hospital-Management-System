const express = require('express')
const appointmentRouter = express.Router()
const { getAppointmentByDoctorUserName, getDoctorAppointment } = require('../controllers/appointmentController');

appointmentRouter.get('/', getDoctorAppointment);

appointmentRouter.get('/:doctorUserName', getAppointmentByDoctorUserName);

module.exports = appointmentRouter;