import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserContext from '../contexts/UserContext';

const DoctorAppointmentPage = () => {
    const { userName } = useContext(UserContext);
    const [appointmentList, setAppointmentList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
    
        setTimeout(() => {
    
            // setAppointmentList([
            //     { firstName: 'John', lastName: 'Doe', contact: '123456789', date: '2023-06-10', time: '14:00' },
            //     { firstName: 'Jane', lastName: 'Smith', contact: '987654321', date: '2023-06-11', time: '16:00' }
            // ]);
            setLoading(false);
        }, 2000);
    }, []);

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
