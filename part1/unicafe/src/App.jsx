import "./App.css";
import { useState } from "react";

const marginStyle = {
  margin: "5px",
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  return (
    <div>
      <h2 style={{ marginTop: "15px" }}>give feedback</h2>
      <button style={marginStyle} onClick={() => setGood(good + 1)}>
        good
      </button>
      <button style={marginStyle} onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button style={marginStyle} onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <div>
        <h2 style={{ marginTop: "15px" }}>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {total === 0 ? 0 : (good - bad) / total}</p>
        <p>positive {total === 0 ? 0 : (good / total) * 100}%</p>
      </div>
    </div>
  );
};

export default App;
