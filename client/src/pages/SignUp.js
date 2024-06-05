import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignUp(){
  const navigate = useNavigate();

  let username = ''
  let password = ''

  const mainPage = () => {
    navigate("/")
  }

  const submit = async(e) => {
    e.preventDefault();
    let usr = document.getElementById("username")
    let psd = document.getElementById('password')

    username = usr.value
    password = psd.value
    
    console.log(usr.value)
    console.log(psd.value)

    usr.value = ''
    psd.value = ''


    try {
      const response = await axios.post('/api/signup', {username , password});
      console.log(response.data); // Handle response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
      <div className='front-page'>
        <h1>Sign up</h1>
        <h3>Create username</h3>
        <input id="username" type='text' placeholder='Username'></input>
        <h3>Create password</h3>
        <input id='password' type='text' placeholder='Password'></input>
        <button onClick={submit}>Sign up</button>
        <button onClick={mainPage}>Back</button>
      </div>
  );
}


export default SignUp;