import React from 'react';
import '../App.css'

const Header = ({homePage})=>{
  return (
    <header className="header">
      <a>Hospital Management System</a>
      <div className = "header-right">
        <div>
          <a href={homePage}>Home</a>
            <a href="#About">About</a>
            <a href="/">Log Out</a>
        </div>
      </div>
    </header>

  );
}
export default Header;
