import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Header from '../components/Header';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';


const AdminHomePage = () => {
  const {userName, setUserName} = useContext(UserContext);
  const navigate = useNavigate();
  
  return (
      <div className='AdminHomePage'>
        <Header homePage={'/admin/homepage'}/>
        <main>
        <h1>Hello {userName}</h1>
        <div>
            <div id="adminMenu">         
            <button>Dashboard</button>
            <button>Appointment Details</button>
            <button>Manage Doctor</button>
            <button>Manage Patient</button>  
          </div>
      
        </div>
        </main>
      </div>
  );
}

export default AdminHomePage;