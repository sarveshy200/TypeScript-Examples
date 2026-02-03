import { useState } from 'react'
import { ChaiCard } from './components/ChaiCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vite + React</h1>

        <ChaiCard
          name="Masala Chai"
          price={3.5}
          isSpecial={true}
        />
        <ChaiCard
          name="Ginger Chai"
          price={4.0}
        />
      </div>
  
    </>
  )
}

export default App
