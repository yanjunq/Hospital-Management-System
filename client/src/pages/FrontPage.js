import React, { Component } from 'react';
import withNavigate from '../components/withNavigate';

class FrontPage extends Component{

  signUpButton = () => {
    this.props.navigate('/sign-up');
  };

  render(){
    return (
      <div className='front-page'>
        <h1>Log in</h1>
        <input type='text' placeholder='Username'></input>
        <input type='text' placeholder='Password'></input>
        <button>Log in</button>
        <button onClick={this.signUpButton}>Sign up</button>
      </div>
    );
  }
}



export default withNavigate(FrontPage);