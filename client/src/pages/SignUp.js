import React, { Component } from 'react';
import withNavigate from '../components/withNavigate';
import axios from 'axios';


class SignUp extends Component{

  username = ''
  password = ''

  mainPage(){
    this.props.navigate("/")
  }

  submit(){
    let usr = document.getElementById("username")
    let psd = document.getElementById('password')

    console.log(usr.value)
    console.log(psd.value)

    usr.value = ''
    psd.value = ''
  }

  render(){
    return (
      <div className='front-page'>
        <h1>Sign up</h1>
        <h3>Create username</h3>
        <input id="username" type='text' placeholder='Username'></input>
        <h3>Create password</h3>
        <input id='password' type='text' placeholder='Password'></input>
        <button onClick={this.submit}>Sign up</button>
        <button onClick={this.mainPage}>Back</button>
      </div>
    );
  }

}

export default withNavigate(SignUp);