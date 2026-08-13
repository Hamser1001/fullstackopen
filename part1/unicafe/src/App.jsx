import "./App.css";
import { useState } from "react";

const marginStyle = {
  margin: "5px",
};

const Statistics = (props) => {
  return (
    <div>
      <h2 style={{ marginTop: "15px" }}>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>
        average {props.total === 0 ? 0 : (props.good - props.bad) / props.total}
      </p>
      <p>
        positive {props.total === 0 ? 0 : (props.good / props.total) * 100}%
      </p>
    </div>
  );
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
      {total === 0 && <p>No feedback given</p>}
      {total > 0 && (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      )}
    </div>
  );
};

export default App;
