import { useState } from 'react'
import { ChaiCard } from './components/ChaiCard'
import ChaiList from './components/ChaiList'
import { Counter } from './components/Counter'
import type { Chai } from './types'
import { OrderForm } from './components/OrderForm'
import { Card } from './components/Card'

const menu:Chai[] = [
  {id:1, name:"Masala", price: 30},
  {id:2, name:"Ginger", price: 30},
  {id:3, name:"Normal", price: 30},
  {id:4, name:"Green", price: 30},


]

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
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList 
        items={menu}
        />
      </div>
      <div>
        <OrderForm 
        OnSubmit={(order)=>{
          console.log("Place", order.name, order.cups)
        }}
        />
      </div>
      <div>
        <Card 
        title="Chai aur Typescript"
        footer={<button>Order Now</button>}
        />
      </div>
  
    </>
  )
}

export default App
