import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  function addvalue() {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Value is Large");
    }
  }
  function delvalue() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Value is Small");
    }
  }
  return (
    <>
      <h1>React Counter</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addvalue}>Increment Value {counter}</button>
      <button onClick={delvalue}>Decreament Value</button>
    </>
  );
}

export default App;
