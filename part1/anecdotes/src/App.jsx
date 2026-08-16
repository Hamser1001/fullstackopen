import { useState } from "react";
import "./App.css";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  console.log("the selected anecdote", selected);
  console.log("the votes", votes);

  const voteHandler = () => {
    const copy = { ...votes };
    if (copy[selected]) {
      copy[selected] += 1;
    } else {
      copy[selected] = 1;
    }
    setVotes(copy);
    // console.log(copy);
  };

  const generateRandomAnecdoteIndex = () => {
    let num = Math.floor(Math.random() * anecdotes.length);
    setSelected(num);
  };

  const mostVotesAnecdote = () => {
    let maxValue = 0;
    let maxKey = null;

    for (let key in votes) {
      if (votes[key] > maxValue) {
        maxValue = votes[key];
        maxKey = key;
      }
    }
    return maxKey;
  };
  const topIndex = mostVotesAnecdote();
  return (
    <div>
      <br />
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <button onClick={voteHandler} style={{ margin: "15px" }}>
        vote
      </button>
      <button onClick={generateRandomAnecdoteIndex} style={{ margin: "15px" }}>
        next anecdote
      </button>
      <br />
      <p>has {votes[selected] ? votes[selected] : "0"} votes</p>
      <h1>Anecdote with the most votes</h1>
      {topIndex !== null ? (
        <>
          <p>{anecdotes[topIndex]}</p>
          <p>has {votes[topIndex]} votes</p>
        </>
      ) : (
        <p>No one had most votes yet</p>
      )}
    </div>
  );
};

export default App;
