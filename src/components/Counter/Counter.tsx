import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <section>
      <h2>Counter</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </section>
  )
}
