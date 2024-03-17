import { ReactNode, useReducer } from "react"
import authReducer from "./authReducer";
import AuthContext from "./authContext"

interface Props {
    children : ReactNode
}

const AuthProvider = ({children} : Props) => {
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
      <AuthContext.Provider value={{user, dispatch: authDispatch}}>
          {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider