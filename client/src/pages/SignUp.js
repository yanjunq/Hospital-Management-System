import React from 'react';
import { useNavigate } from 'react-router-dom';


function SignUp(){
  const navigate = useNavigate();

  const mainPage = function(){
    navigate("/")
  }

  return (
    <div className='front-page'>
        <h1>Sign up</h1>
        <h3>Create username</h3>
        <input type='text' placeholder='Username'></input>
        <h3>Create password</h3>
        <input type='text' placeholder='Password'></input>
        <button>Sign up</button>
        <button onClick={mainPage}>Back</button>
    </div>
  );
}

export default SignUp;