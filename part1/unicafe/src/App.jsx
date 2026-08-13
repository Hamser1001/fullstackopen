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

  return (
    <div>
      <h2 style={{ marginTop: "10px" }}>give feedback</h2>
      <button style={marginStyle} onClick={() => setGood(good + 1)}>
        good
      </button>
      <button style={marginStyle} onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button style={marginStyle} onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <h2 style={{ marginTop: "10px" }}>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
