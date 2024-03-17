import { useReducer} from "react"
import counterReducer from "./counterReducer"

const Counter = () => {
// const [value, setValue] = useState(0)
 const [value, dispatch] = useReducer(counterReducer, 0)

  return (
    <div>
        Counter {value}
        <button className="btn btn-primary" onClick={() => dispatch({type: "INCREMENT"})}>
            Increment
        </button>
        <button className="btn btn-secondary" onClick={() => dispatch({type: "DECREMENT"})}>
            Decrement
        </button>
    </div>
  )
}

export default Counter