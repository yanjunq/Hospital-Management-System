import React from 'react';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import { useContext, useState} from 'react';
import UserContext from '../contexts/UserContext';
import Header from '../components/Header';
import withNavigate from '../components/withNavigate';

function FrontPage() {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UserContext);
  const [inputUserName, setInputUserName] = useState("");

 
  const signUpButton = () => {
    navigate('/signup');
  };



  const handleLogin = (e) => {
    e.preventDefault();
    setUserName(inputUserName);
    //test, need more implementation on security and username/password check 
    navigate('/doctor/homepage');
    
  }

  return (
    <div className='front-page'>
      <Header />
      <h1>Log in</h1>
      <form onSubmit={handleLogin} id="login-form">
        <label>Username</label>
        <input type='text' placeholder='Username' value={inputUserName} onChange={(e) => { setInputUserName(e.target.value) }}></input>
        <label>Password</label>
        <input type='text' placeholder='Password'></input>
        <button type="submit">Enter</button>
      </form>
      {/* <input type='text' placeholder='Username'></input>
      <input type='text' placeholder='Password'></input> */}
      {/* <button>Log in</button> */}
      <button onClick={signUpButton}>Sign up</button>
    </div>
  );
}

// import React, { Component } from 'react';
// import withNavigate from '../components/withNavigate';

// class FrontPage extends Component{

//   signUpButton = () => {
//     this.props.navigate('/sign-up');
//   };

//   render(){
//     return (
//       <div className='front-page'>
//         <h1>Log in</h1>
//         <input type='text' placeholder='Username'></input>
//         <input type='text' placeholder='Password'></input>
//         <button>Log in</button>
//         <button onClick={this.signUpButton}>Sign up</button>
//       </div>
//     );
//   }
// >>>>>>> origin/ohm
// }

// export default withNavigate(FrontPage);

export default FrontPage;