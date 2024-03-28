import { useState } from 'react';
import './App.css'

function App() {
  const[counter, setCounter] = useState(0);

  function addValue() {
    if (counter >= 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  }

  function decreaseValue() {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter value: {counter}</h3>     

      <button 
        onClick={addValue}
      >Add value</button> 
      <br />
      <button
        onClick={decreaseValue}
      >Decrease value</button>
    </>
  )
}

export default App;
