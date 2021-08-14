import React, { useState } from "react"

const App = () => {
    let [ counter, setCounter ] = useState(10)
    const finished = "!!Blast Off!!"
    const end = setTimeout(
      () => setCounter(counter - 1),
      1000
    )
    if (counter == 0) {
      clearInterval(end);
      counter = undefined
    }
      console.log('rendering ...', counter);
    return (
      <div>{counter??finished}</div>
    )
}

export default App


