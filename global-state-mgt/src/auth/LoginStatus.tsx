import useAuth from "./useAuth"

const LoginStatus = () => {
  const {user, dispatch} = useAuth()

  if (user)
  return (
    <>
        <div>
            <span>{user}</span>
            <a 
            onClick={() => dispatch({type: "LOGOUT"})}
            href="#">
                LOGOUT
            </a>
        </div>
    </>
    )
  return (
    <div>LoginStatus</div>
  )
}

export default LoginStatus