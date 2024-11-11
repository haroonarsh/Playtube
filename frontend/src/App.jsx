import { useEffect, useState } from 'react';
import './App.css'
import HomePage from './components/homePage/HomePage';

function App() {

  const [data, setDate] = useState([]);

  // useEffect(() => {
  //   async  function fetchData() {
  //     const response = await fe('http://localhost:8000/api/v1/users')
  //   }
  // })
  

  return (
    <>
    <HomePage />
    </>
  )
}

export default App
