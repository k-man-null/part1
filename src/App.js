import React, { useState } from "react"
const StatisticLine = (props) => {
  return (
    <>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
    </>
  )
}

const Statistics = (props) => {
  console.log('Recieved props', props)
  if (props.all ===0) {
    return (
      <>
      <h1 alt="Titele"> give feedback</h1>
      <button onClick={props.handleGood}>good</button>
      <button onClick={props.handleNeutral}>neutral</button>
      <button onClick={props.handleBad}>bad</button>
      <h1 alt="Title">you need to give feedback</h1>
      </>
    )
  }
  return (
    <>
    <h1> give feedback</h1>
      <button onClick={props.handleGood}>good</button>
      <button onClick={props.handleNeutral}>neutral</button>
      <button onClick={props.handleBad}>bad</button>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value= {props.bad}/>
        <StatisticLine text="all" value={props.all}/>
        <StatisticLine text="average" value={props.average}/>
        <StatisticLine text="positive" value={props.positive}/>
        </tbody>
      </table>
    </>
  )
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood = () => setGood(good + 1)
  const handleNeutral = ()=> setNeutral(neutral+ 1)
  const handleBad = ()=> setBad(bad + 1)
  const average = (good*1 + bad*-1)/(good+bad+neutral)
  let all = good+neutral+bad
  let positive = good/all*100 + '%'
  return (
    <div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
    </div>
  )
}

export default App
