import React from 'react';

function FrontPage(){
  return (
    <div className='front-page'>
      <h1>Log in</h1>
      <input type='text' placeholder='Username'></input>
      <input type='text' placeholder='Password'></input>
      <button>Log in</button>
      <button>Sign up</button>
    </div>
  );
}

export default FrontPage;