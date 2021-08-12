import React from "react"

function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
    <p>{props.part1} {props.exercises1}</p>
    <p>{props.part2} {props.exercises2}</p>
    <p>{props.part3} {props.exercises3}</p>
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
      <Content part1 = {course.parts[0].name} part2 = {course.parts[1].name} part3 = {course.parts[2].name} exercises1 ={course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises}/>
      <Total total = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>      
    </div>
  ) 
}

export default App


