import { FormEvent, useRef } from "react"
import useAddTodo from "../../hooks/mutation/useAddTodo"


const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null)

  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = ""
  })


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    // mutate data 
    if (ref.current && ref.current.value){
      addTodo.mutate({
        id:0,
        title: ref.current?.value,
        userId: 1,
        completed: true
      })
    }
    
  }

  return (
    <>
    {addTodo.error && <p className="alert alert-danger">{addTodo.error.message}</p>}
      <form className="row mb-3" onSubmit={handleSubmit}>
        <div className="col">
          <input ref={ref}  type="text" className="form-control"/>
        </div>
        <div className="col">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  )
}

export default TodoForm