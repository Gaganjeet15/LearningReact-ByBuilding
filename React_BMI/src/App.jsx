import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState();
  const [category, setCategory] = useState();

  function handleOnweight(e) {
    setWeight(e.target.value);
    setBmi("");
    setCategory("");
  }
  function handleOnheight(e) {
    setHeight(e.target.value);
    setBmi(null);
    setCategory("");
  }
  function reset() {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  }
  function onCal() {
    let heightInMeters = height / 100;
    let bmiValue = weight / (heightInMeters * heightInMeters);
    let roundedBMI = bmiValue.toFixed(2);
    setBmi(roundedBMI);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  }
  const isInvalid = !weight || !height || weight <= 0 || height <= 0;

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div
          className="card shadow-lg p-4 rounded-4"
          style={{ width: "100%", maxWidth: "400px" }}>
          <h3 className="text-center mb-4">BMI Calculator</h3>
          <div className="mb-3">
            <label className="form-label">Weight (kg)</label>
            <input
              onChange={handleOnweight}
              value={weight}
              type="number"
              className="form-control"
              placeholder="e.g. 70"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Height (cm)</label>
            <input
              onChange={handleOnheight}
              value={height}
              type="number"
              className="form-control"
              placeholder="e.g. 175"
            />
          </div>
          <button
            disabled={isInvalid}
            className="btn btn-primary w-100 mb-3"
            onClick={onCal}>
            Calculate BMI
          </button>
          <button className="btn btn-primary w-100 mb-3" onClick={reset}>
            Reset
          </button>

          <div className="alert alert-info text-center mb-0">
            <strong>BMI: {bmi}</strong> <br />
            <span className="text-capitalize">{category}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
