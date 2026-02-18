import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to My First React App! 🚀</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>Click the button to increase the counter</p>
      </div>
      <p className="info">
        Edit <code>src/App.jsx</code> and save to see changes
      </p>
    </div>
  )
}

export default App
