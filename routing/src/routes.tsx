import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetail from "./components/UserDetail";
import Layout from "./components/Layout";
import UsersPage from "./pages/UsersPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./privateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    errorElement: <ErrorPage/>,
    children: [
      {path:"", element: <HomePage/>},
      {path: "/login", element: <LoginPage />},
      {
        path: "users",
        element: <UsersPage/>,
        children: [
          {path: ":id", element: <UserDetail/>},
        ]
      }
    ]
  }, 
  {
    element: <PrivateRoutes />,
    // protecting the users route
    children: [
      {
        path: "users",
        element: <UsersPage/>,
        children: [
          {path: ":id", element: <UserDetail/>},
        ]
      }
    ]

  }
])


export default router