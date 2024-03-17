import Counter from "./counter/Counter"
import TasksList from "./tasks/TasksList"
import TasksProvider from "./tasks/TasksProvider"


const App = () => {

  return (
    <>
      <TasksProvider>
        <Counter />
        <TasksList />
      </TasksProvider>
    </>
    
  )
}

export default App