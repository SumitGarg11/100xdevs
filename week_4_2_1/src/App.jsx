import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <button onClick={function (){
        setCount(Math.random());
       }} >Count {count}</button>
    </div>
  )
}

export default App
