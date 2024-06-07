const { query } = require('express')
const { ModuleResolutionKind } = require('typescript')
const db = require('../database')

const getAllPatients = (req, res) => {
    query = 'SELECT * FROM PATIENTS';
    db.query(query, (err, result) => {
        if (err) {
            console.log('failed to get all patients');
            res.status(500).send('failed to get all patients');
            return;
        }
        console.log(result);
        res.JSON(result);
    })
    
}


const deletePatientByID = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM PATIENT WHERE patientID = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.log('fail to delete patient by id ' + id);
            res.status(500).send('fail to delete patient by id');
            return;
        }
        if (db.affectedRow == 0) {
            return res.status(404).send('Patient not found');
        }
        res.send('Delete patient with id ' + id + " successfully.");
        
    });
}

module.exports = {
    getAllPatients,
    deletePatientByID
}