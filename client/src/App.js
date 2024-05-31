import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import FrontPage from './pages/FrontPage.js';
import SignUp from './pages/SignUp.js';
import DoctorHomePage from './pages/DoctorHomePage.js';

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
    <Router>
    <Routes>
      <Route path="/" element={<FrontPage/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/doctor/homepage" element={<DoctorHomePage/>} />
    </Routes>
  </Router>
  )
}

export default App

