import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "./Login/Login";
// import Register from "./Register/Register";
import JoinasEmployee from "../Pages/JoinasEmployee";
import JoinAsHR from "../Pages/JoinAsHR";
import UpdateProfile from "../Pages/UpdateProfile";
import RequestedAssets from "../Pages/RequestedAsseets";

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
      // {
      //   path: "/register",
      //   element: <Register></Register>,
      // },
      {
        path: "/joinEmployee",
        element: <JoinasEmployee></JoinasEmployee>,
      },
      {
        path: "/manager",
        element: <JoinAsHR></JoinAsHR>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/requestAsset",
        element: <RequestedAssets></RequestedAssets>,
      },
    ],
  },
]);
