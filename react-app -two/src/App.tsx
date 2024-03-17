//import PaginatedPostList from "./components/fetching/PaginatedPostList"
// import InfintePostList from "./components/fetching/InfintePostList"

import TodoForm from "./components/mutation/TodoForm"
import TodoList from "./components/mutation/TodoList";

const App = () => {
  return (
    <>
    {/* <UserPostList/> */}
    {/* <PaginatedPostList /> */}
    {/* <InfintePostList /> */}

    {/* ---------------------MUTATION---------------- */}
    <TodoForm />
    <TodoList />
    </>
  )
}

export default App