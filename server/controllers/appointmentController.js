const db = require('../database');

const getAppointmentByDoctorUserName = (req, res) => {
    const doctorUserName = req.params.doctorUserName;

    if (!doctorUserName) {
        res.status(400).send('Doctor User Name is required');
        return;
    }

    const query = `
        SELECT 
            a.appointmentID, 
            a.appointmentDate,
            p.patientFirstName,
            p.patientLastName,
            p.contact
        FROM APPOINTMENT a
        JOIN DOCTOR d ON a.doctorID = d.doctorID
        JOIN PATIENT p ON a.patientID = p.patientID
        WHERE d.Name = ?
    `;

    db.query(query, [doctorUserName], (err, result) => {
        if (err) {
            console.error('Cannot get appointment by doctor User Name', err);
            res.status(500).send('Failed to retrieve appointments');
            return;
        }
        res.json(result);
    });
};


const getDoctorAppointment = (req, res) => {
    
    // const query = `SELECT * FROM APPOINTMENT`;
    const query = `SELECT a.appointmentID,
                        a.appointmentDate,
                        a.startTime,
                        a.endTime,
                        p.patientFirstName,
                        p.patientLastName,
                        p.contact
                        FROM APPOINTMENT a
                        JOIN PATIENT p ON p.patientID = a.patientID`;

    db.query(query, (err, result) => {
        if (err){
            console.error('error fetching appointment data', err);
            res.status(500).send('failed to restrive data');
            return;
        }
        // res.json(result);
        console.log(result);
        res.json(result);
    });
}


module.exports = {
    getAppointmentByDoctorUserName,
    getDoctorAppointment
};