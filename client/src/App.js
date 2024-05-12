import React from 'react'
import { useEffect, useState } from 'react'

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
  
  return (
    <div>
      
    </div>
  )
}

export default App

