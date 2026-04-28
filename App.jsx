import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count')
    return saved ? parseInt(saved, 10) : 0
  })

  useEffect(() => {
    localStorage.setItem('count', count.toString())
  }, [count])

  return (
    <main>
      <div className="card">
        <p className="label">your count</p>
        <h1>{count}</h1>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)} aria-label="decrement">
            −
          </button>
          <button onClick={() => setCount(0)} className="reset">
            reset
          </button>
          <button onClick={() => setCount(count + 1)} aria-label="increment" className="primary">
            +
          </button>
        </div>
        <p className="hint">refresh the page — the count survives.</p>
      </div>
    </main>
  )
}
