import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserContext from '../contexts/UserContext';
import axios from 'axios';


const DoctorAppointmentPage = () => {
    const { userName } = useContext(UserContext);
    const [appointmentList, setAppointmentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    function fetchAppointmentByDoctorName(name) {
        //test
        name = "heheh"
        axios.get('/api/appointments', { params: { doctorUserName: name } })
            .then(response => {
                if (response.data.length === 0) {
                    console.log("No appointments found.");
                    setAppointmentList([]); 
                    setLoading(false);
                } else {
                    setAppointmentList(response.data);
                    setLoading(false);
                }
            })
    }
    
    const fetchAppointmentByDoctor = () =>{
            axios.get('http://localhost:5000/api/appointments/')
            .then(response => {
                if (response.data.length === 0) {
                    console.log("No appointments found.");
                    setAppointmentList([]); 
                    setLoading(false); 
                } else {
                    setAppointmentList(response.data);
                    setLoading(false);
                }
            })
                
            .catch(error => {
                console.log("Error fetching appointment", error);
                setLoading(false);
            });
        }

    useEffect(() => {
    
        setTimeout(() => {
            fetchAppointmentByDoctorName(userName);
            // fetchAppointmentByDoctor();
            setLoading(false);
        }, 2000);
    }, [userName]);

    const handleSearchPatient = (e) => {
        e.preventDefault();
        //not finish
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='DoctorAppointmentPage'>
          <Header homePage={'/doctor/home'}/>
          <main>
                <h1>Hello {userName}</h1>
                <div>
                    <label htmlFor="sort">Sort by:</label>
                    <select id="sort">
                        <option value="LastName">Last Name</option>
                        <option value="FirstName">First Name</option>
                        <option value="Date">Date</option>
                    </select>
                    
                    <form id="searchPatientForm" onSubmit={handleSearchPatient}>
                        <input type="text" placeholder="Patient's name" id="searchAppoint" />
                        <input type="submit" value="Search" />
                    </form>

                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact</th>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(appointmentList.length) ? (
                                appointmentList.map((appointment) => {
                                    <tr>
                                        <td>{appointment.firstName}</td>
                                        <td>{appointment.lasttName}</td>
                                        <td>{appointment.contact}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                    </tr>
                                })
                            
                            ): (
                                    <tr>No Appointment</tr>
                            )}
                        </tbody>
                    </table>
                </div>
          </main>
        </div>
    );
}

export default DoctorAppointmentPage;
