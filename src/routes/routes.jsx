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
import UpdateQuery from "../pages/UpdateQuery/UpdateQuery";
import MyRecommendations from "../pages/MyRecommendations/MyRecommendations";
import RecommendationsForMe from "../pages/RecommendationsForMe/RecommendationsForMe";

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
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations />
          </PrivateRoute>
        ),
      },
      {
        path: "/recommendations-for-me",
        element: (
          <PrivateRoute>
            <RecommendationsForMe />
          </PrivateRoute>
        ),
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
        path: "/update-query/:id",
        element: (
          <PrivateRoute>
            <UpdateQuery />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_BASE_URL}/queries/${params.id}`, {
            credentials: "include",
          }),
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
