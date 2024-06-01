import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);