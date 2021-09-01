 import React, { useState } from "react"

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0);
  const random = Math.floor(Math.random()* anecdotes.length);
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])
  const copy = [...votes]
  const increaseVote = ()=> {
      copy[selected] += 1;
      setVotes(copy)
  }
  const [winner, setWinner] = useState(0);

  const getWinner = () => {
      let value = Math.max(...votes);
      console.log(votes,value)
      setWinner(votes.indexOf(value))
  }
  const handleClick = () => {
        setSelected(random) 
        getWinner()
  }
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <div>{anecdotes[selected]} </div>
      <div> has {votes[selected]} votes</div>
      <button onClick={increaseVote}>vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[winner]}</div>
      <div>has {Math.max(...votes)}</div>
    </div>
  )
}


export default App
