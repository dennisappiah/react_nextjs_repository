import { useState } from 'react'
import NavBar from './components/NavBar'
import Cart from './components/Cart'

const App = () => {
  const [products, setProducts] = useState(["product 1", "product 2"])


  const [game, setGame] = useState({
    id: 1,
    player:{
      name: "kofi"
    }
  })

  const [pizza, setPizza] = useState({
    name: "Pepproni",
    toppings: ["mappings"]
  })

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {id: 1, title: "Product 1", quantity:1},
      {id: 2, title: "Product 2", quantity:5},
    ]
  })

  const [bugs, setBugs] = useState([
      {id: 1, title: "Product 1", fixed:false},
      {id: 2, title: "Product 2", fixed: false},  
  ])

  const [tags, setTags] = useState(["happy", "cheerul"])

  const handleClick = ()=> {
    // change player name to "Ama"
    setGame({...game, player:{...game.player, name: "Ama"}})

    // add new toppings
    setPizza({...pizza, toppings:[...pizza.toppings, "new Pizza"]})

    // update quantity of product 1 by 1

    setCart({...cart, items : cart.items.map(item => (
      item.id === 1 ? {...item, quantity: item.quantity + 1}: item
    ))})
    
      // updating array of objects
      setBugs(bugs.map(bug => (
        bug.id === 1 ? {...bug, fixed: true}: bug
      )))

      // add tag
      setTags([...tags, "new tag"])

      // remove tag
      setTags(tags.filter(tag => tag !== "happy"))
  }

  const handleDelete = ()=> {
    setProducts([])
  }

  return (
    <>
      <NavBar cartNumber={products.length} />
      <Cart items={products} OnDelete={handleDelete}/>
    </>
  )
}

export default App