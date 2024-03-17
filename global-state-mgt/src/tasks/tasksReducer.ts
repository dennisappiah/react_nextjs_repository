export interface Task{
    id: number
    title: string
}


interface AddTask {
    type: "ADD",
    //payload
    task: Task
}

interface DeleteTask{
    type: "DELETE"
    // payload
    taskId : number
}

export type TaskAction = AddTask | DeleteTask

// state -> current state = Task[]
const tasksReducer = (state : Task[], action: TaskAction) : Task[] => {
    switch(action.type){
        case "ADD":
            return [...state, action.task]
        case "DELETE":
            return state.filter(task => task.id !== action.taskId )
        
    }
}

export default tasksReducer;