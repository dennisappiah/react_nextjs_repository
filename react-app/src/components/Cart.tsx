interface Props{
    items: string[]
    OnDelete: () => void
}

const Cart = ({items, OnDelete}: Props) => {
    // when handling click , notify a delete action to consumer
    const handleClick = () => {
        // notify the parent of a delete action
        OnDelete()
    }

  return (
    <>
    <div>List of items</div>
    <ul>
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
    <button onClick={handleClick}>Delete</button>
    </>
    
  )
}

export default Cart