import useCounterStore from "./store"

const CounterZustand = () => {
 const {counter, increment, decrement} =  useCounterStore()

  return (
    <div>
        <p>{counter}</p>
        <button className="btn btn-primary" onClick={() => increment()}>
            Increment
        </button>
        <button className="btn btn-secondary" onClick={() => decrement()}>
            Decrement
        </button>
    </div>
  )
}

export default CounterZustand