import React from 'react';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

function FrontPage(){
  const navigate = useNavigate();

  const signUpButton = () => {
    navigate('/sign-up');
  };

  return (
    <div className='front-page'>
      <h1>Log in</h1>
      <input type='text' placeholder='Username'></input>
      <input type='text' placeholder='Password'></input>
      <button>Log in</button>
      <button onClick={signUpButton}>Sign up</button>
    </div>
  );
}



export default FrontPage;