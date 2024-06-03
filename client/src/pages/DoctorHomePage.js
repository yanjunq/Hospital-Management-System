import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Header from '../components/Header';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';


const DoctorHomePage = () => {
  const {userName, setUserName} = useContext(UserContext);
  const navigate = useNavigate();
  return (
      <div className='DoctorHomePage'>
        <Header />
        <main>
        <h1>Hello {userName}</h1>
        <div>
          
          </div>

        </main>
      </div>
  );
}

export default DoctorHomePage;