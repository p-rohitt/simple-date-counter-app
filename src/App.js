import "./styles.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("19 june 2023");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(0);
    setCount(0);
  }
  return (
    <div className="App">
      <h2>Date Counter App</h2>

      <div className="step-div">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />{" "}
        Step: {step}
      </div>
      <div className="counter-div">
        <button onClick={() => setCount((prevCount) => prevCount - step)}>
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount((prevCount) => prevCount + step)}>
          +
        </button>
      </div>
      <div className="date-message">
        <p>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days from today was`}{" "}
          {date.toDateString()}
        </p>
      </div>
      <div className="reset">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
