import { useState } from "react";
import "./App.css";

function App() {
  let btn_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "C", "="];
  let [ansDis, setansDis] = useState("");
  const handleText = (e) => {
    let button_text = e.target.innerText;

    if (button_text === "C") {
      setansDis("");
    } else if (button_text === "=") {
      const result = eval(ansDis);
      setansDis(result);
    } else {
      setansDis(ansDis + button_text);
    }
  };

  return (
    <>
      <div className="calculator">
        <input type="text" value={ansDis} />
        <div className="button-grid">
          {btn_arr.map((item) => (
            <button className="num_btn" key={item} onClick={handleText}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
