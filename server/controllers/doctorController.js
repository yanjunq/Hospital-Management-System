const { query } = require('express')
const db = require('../database')

const getAllDoctor = (req, res) => {
    query = 'SELECT ALL * FROM DOCTOR'
    db.query(query, (err, result) => {
        if (err) {
            console.log('fail to load all doctor');
            res.set(500).send('fail to restrive data');
            return;
        }
        console.log(result);
        res.JSON(result);
    })
}

const deleteDoctorByID = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM DOCTOR WHERE doctorID = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.log('fail to delete doctor by id ' + id);
            res.status(500).send('fail to delete doctor by id');
            return;
        }
        if (db.affectedRow == 0) {
            return res.status(404).send('Doctor not found');
        }
        res.send('Delete doctor with id ' + id + " successfully.");
        
    });
}

module.exports = {
    getAllDoctor,
    deleteDoctorByID
}
