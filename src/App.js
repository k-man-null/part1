import React, { useState } from "react"


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
    <p>{allClicks.join(' ')}</p>
  </div>
)
}
export default App


