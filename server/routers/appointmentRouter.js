const express = require('express')
const appointmentRouter = express.Router()
const { getAppointmentByDoctorUserName, getDoctorAppointment, deleteDoctorAppointmentByAppointmentID } = require('../controllers/appointmentController');

appointmentRouter.get('/', getDoctorAppointment);

appointmentRouter.get('/:doctorUserName', getAppointmentByDoctorUserName);

appointmentRouter.delete('/delete/:id', deleteDoctorAppointmentByAppointmentID);

module.exports = appointmentRouter;