import React from "react"

function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log('-------');
  console.log(props);
  console.log('-------');
  return (
    <>
    <p>{props.parts[0].name} {props.parts[0].exercises}</p>
    <p>{props.parts[1].name} {props.parts[1].exercises}</p>
    <p>{props.parts[2].name} {props.parts[2].exercises}</p>
  </>
  )
}

function Total(props){
  return (
    <p> Number of exercise {props.total}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack Application Development',

    parts: [
    {
    name:'Fundamentals of React',
    exercises: 10
    },

    { 
    name:'Using props to pass data',
    exercises: 7
    },

    {
    name: 'State of a component',
    exercises: 14
    }
  ]
  }
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total total = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>      
    </div>
  ) 
}

export default App


