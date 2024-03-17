import useTasks from "./useTasks"

const TasksList = () => {
 const {tasks, dispatch} = useTasks()

  return (
    <>
    <button onClick={() => dispatch({type:"ADD", "task":{id: Date.now(), title:"Task" + Date.now()}})} className="btn btn-primary">Add</button>
    <ul>
        {tasks.map(task => <li key={task.id}>
            <span className="flex-grow-1" key={task.id}>{task.title}</span>
            <button onClick={() => dispatch({type:"DELETE", taskId:1}) } className="btn btn-primary">
                Delete
           </button>
        </li>)}
    </ul>
    </>
  )
}

export default TasksList