import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div>
        {/* Navbar */}
        {/* Outlet */}
        <div>
            <Outlet/>
        </div>
        {/* Footer */}
        
    </div>
  )
}

export default Root