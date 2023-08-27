import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("august 27 2023");
  date.setDate(date.getDate() + count);
  const formattedDate = date.toDateString();

  return (
    <>
      <div className="flex step">
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div className="flex count">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <span>Counter: {count}</span>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <div>
        <h4>{count === 0 && `Today is ${formattedDate}`}</h4>
        <h4>{count < 0 && `${count} days from today: ${formattedDate}`}</h4>
        <h4>{count > 0 && `${count} days from today: ${formattedDate}`}</h4>
      </div>
    </>
  );
}
