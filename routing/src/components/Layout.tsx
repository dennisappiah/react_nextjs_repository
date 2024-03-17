import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <>
        <NavBar />
        <div id='main'>
            {/* the content area for each nav links to be rendered */}
            <Outlet />     
        </div>
    </>
  )
}

export default Layout