import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

/* 
The number variable is the initial state, and the setNumber function is used to update the state of number.
The doubleNum variable is initialized to the value of number multiplied by 2. The setDoubleNum function is used to update the state of doubleNum.
*/
  const [number, setNumber] = useState(0);
  const [doubleNum, setDoubleNum] = useState(0)

  useEffect(()=>{
    console.log("use effect triggered");
    setDoubleNum(number * 2);
  },[number])


  const handleInc = () => {
    setNumber(number + 1);
    // setDoubleNum(number * 2);
  }

  const handleDec = () => {
    
    setNumber(number - 1);
    // setDoubleNum(number * 2);

  }

  return (

    <div>

      <button value={number} onClick={handleInc}> + </button>

      <h2>{number}</h2>

      <h2>{doubleNum}</h2>

      <button value={number} onClick={handleDec}> - </button>

    </div>

  );
}





export default App;
