import React from 'react';
import '../App.css'

const Header = ()=>{
  return (
    <header className="header">
      <a>Hospital Management System</a>
      <div className = "header-right">
        <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Log Out</a>
        </div>
      </div>
      
    </header>

  );
}
export default Header;
