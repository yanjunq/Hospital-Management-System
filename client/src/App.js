import React from 'react'
import { useEffect, useState } from 'react'
import Header from './components/Header.js';
import FrontPage from './pages/FrontPage.js';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  //add components here
  return (
    <div>
      <FrontPage />
    </div>
  )
}

export default App

