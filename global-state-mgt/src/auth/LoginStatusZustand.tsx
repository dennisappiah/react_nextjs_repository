import useAuthStore from './store'

const LoginStatusZustand = () => {
   const {user, login, logout} =  useAuthStore()

    if (user)
    return (
      <>
          <div>
              <span>{user}</span>
              <a 
              onClick={() => login()}
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

export default LoginStatusZustand