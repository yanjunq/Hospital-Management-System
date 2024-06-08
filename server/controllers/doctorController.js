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

//helper function for getting departmentID
const getDepartmentIDBydepartmentName = ({ departmentName }) => {
    db.query("SELECT departmentID FROM DEPARTMENT WHERE departmentName = ?", (err, result) => {
        if (err) {
            console.log('fail to get departmentID with deparmentName ' + departmentName);
            return -1;
        
        }
        if (result.length == 0) {
            return 0;
        }
    });
    
    return result[0].departmentID;
    
}
const changeDoctorDepartment = (req, res) => {
    const { doctorUserName, departmentName } = req.body;
    //get departmentID

    const departmentID = getDepartmentIDBydepartmentName(departmentName);

    switch (departmentID) {
        case -1:
            console.log('fail to get departmentID with deparmentName ' + departmentName);
            return res.status(500).send('fail to get departmentID ');
        case 0:
            return res.status(404).send('Department not found');
    }

    //change doctor's department
    db.query('UPDATE DOCTOR SET deparmentID = ? WHERE doctorUserName = ?', [doctorUserName,departmentID], (err, result) => {
        if (err) {
            console.log("fail to get change doctor's department");
            return res.status(500).send("fail to get change doctor's department");
        }
        if (db.affectedRow == 0) {
            return res.status(404).send('Doctor not found');
        }
        res.send('Doctor department updated successfully');
    });
}

const addDoctor = (req, res) => {
    const {doctorUserName, departmentName} = req.body;
    //get departmentID

    const departmentID = getDepartmentIDBydepartmentName(departmentName);

    switch (departmentID) {
        case -1:
            console.log('fail to get departmentID with deparmentName ' + departmentName);
            return res.status(500).send('fail to get departmentID ');
        case 0:
            return res.status(404).send('Department not found');
    }
    
    //add doctor 
    db.query('INSERT INTO DOCTOR(doctorUserName, departmentName) VALUES(?,?)', [doctorUserName,departmentID], (err, result) => {
        if (err) {
            console.log("fail to get add doctor");
            return res.status(500).send("fail to add doctor");
        }

        res.send('Doctor added successfully');
    });
}

module.exports = {
    getAllDoctor,
    deleteDoctorByID,
    changeDoctorDepartment,
    addDoctor
}
