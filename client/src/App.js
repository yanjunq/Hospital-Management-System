import React from 'react'
import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage.js';
import SignUp from './pages/SignUp.js';
import DoctorHomePage from './pages/DoctorHomePage.js';
import DoctorAppointmentPage from './pages/DoctorAppointmentPage.js';
import AdminHomePage from './pages/AdminHomePage.js';
import AdminManageAppointmentPage from './pages/AdminManageAppointment.js';
import AdminManageDoctorPage from './pages/AdminManageDoctor.js';
import AdminManagePatientPage from './pages/AdminManagePatient.js';
import { UserProvider } from './contexts/UserContext.js';





function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  //add components here
  return (
 
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/doctor/home" element={<DoctorHomePage />} />
          <Route path="/doctor/appointment" element={<DoctorAppointmentPage />} />
          <Route path="/admin/home" element={<AdminHomePage />} />
          <Route path="/admin/patient" element={<AdminManagePatientPage />} />
          <Route path="/admin/doctor" element={<AdminManageDoctorPage />} />
          <Route path="/admin/appointment" element={<AdminManageAppointmentPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}


export default App

