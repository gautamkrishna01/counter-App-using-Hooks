import React, { useEffect, useState } from 'react'
import "./app.css"

const App = () => {
  const[count,setcount]=useState(0)
  useEffect( () =>
  {
    document.title=`count (${count})`
  }

  )
  const increase = () =>
  {
    setcount(count+1)
  }
  const decrese = () =>
  {
    setcount(count-1)
  }
  return (
    <div className='container'>
      <h2>Counter Application</h2>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrese}>Decrease</button>
    </div>
  )
}

export default App
