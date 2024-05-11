import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Auth/Login";
import MyQueries from "../pages/MyQueries/MyQueries";
import AddQueries from "../pages/AddQueries/AddQueries";
import PrivateRoute from "./PrivateRoute";
import Queries from "../pages/Queries/Queries";
import QueryDetails from "../pages/QueryDetails/QueryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_BASE_URL}/queries`, {
            credentials: "include",
          }),
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/query-details/:id",
        element: <QueryDetails />,
      },
      {
        path: "/my-queries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-query",
        element: (
          <PrivateRoute>
            <AddQueries />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
