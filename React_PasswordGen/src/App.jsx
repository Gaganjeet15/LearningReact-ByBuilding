import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [len, setLen] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [copyBtnText, setCopyBtnText] = useState("Copy");
  const [password, setPassword] = useState("");
  const copyRef = useRef(null);

  function onCopy() {
    navigator.clipboard.writeText(password);
    setCopyBtnText("Copied");
  }

  useEffect(() => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "1234567890";
    if (includeChars) chars += "!@#$&*_+-=,.";

    let pass = "";
    for (let i = 0; i < len; i++) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      pass += randomChar;
    }
    setPassword(pass);
    setCopyBtnText("Copy");
  }, [len, includeNumbers, includeChars]);

  return (
    <div className="div-out">
      <h2 className="app-heading">🔐 Password Generator</h2>

      <div className="input-div">
        <input type="text" readOnly value={password} ref={copyRef} />
        <button onClick={onCopy}>{copyBtnText}</button>
      </div>

      <div className="slider">
        <label>
          Length ({len})
          <input
            type="range"
            min="4"
            max="20"
            value={len}
            onChange={(e) => setLen(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>

        <label>
          <input
            type="checkbox"
            onChange={(e) => setIncludeChars(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
    </div>
  );
}

export default App;
