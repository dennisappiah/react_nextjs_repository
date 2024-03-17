import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";
import tasksReducer from "./tasksReducer";


interface Props {
    children: ReactNode
}

const TasksProvider = ({children}:Props) => {
    // sharing `tasks` and `dispatch` actions across components
  const [tasks, tasksDispatch ] = useReducer(tasksReducer, []);
  
  return (
    <TasksContext.Provider value={{tasks, dispatch: tasksDispatch}}>
        {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider