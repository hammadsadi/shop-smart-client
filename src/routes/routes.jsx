import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children:[
            {
                index:true,
                element: <Home/>
            }
        ]
    },
    {
        path: '/login',
        element: <Root/>
    },
    {
        path: '/register',
        element: <Register/>
    }

])

export default router