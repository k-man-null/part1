import React, { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const App = () => { 

const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
const [allClicks, setAll] = useState([])

const handleLeftClick = () => {
  setAll(allClicks.concat('L'))
  setLeft(left + 1)
}
//'concat' is preferred to 'push' because it returns a copy of the array
const handRightClick = () => {
  setAll(allClicks.concat('R'))
  setRight(right + 1)
}

return(
  <div>
    {left}
    <button onClick={handleLeftClick}>Left</button>
    <button onClick={handRightClick}>Right</button>
    {right}
    <History allClicks={allClicks}/>
  </div>
)
}
export default App


