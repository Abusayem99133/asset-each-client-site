import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "./Login/Login";
// import Register from "./Register/Register";
import JoinasEmployee from "../Pages/EmployeePage/JoinasEmployee";
import JoinAsHR from "../Pages/HrPages/JoinAsHR";
import UpdateProfile from "../Pages/UpdateProfile";
import RequestedAssets from "../Pages/EmployeePage/RequestedAsseets";
import Payments from "../Pages/HrPages/Payments";
import MyTeam from "../Pages/EmployeePage/MyTeam";

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
      // this is Hr route
      {
        path: "/manager",
        element: <JoinAsHR></JoinAsHR>,
      },
      {
        path: "/hrPayment",
        element: <Payments></Payments>,
      },
      // sheared route
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      // this is employee route
      {
        path: "/joinEmployee",
        element: <JoinasEmployee></JoinasEmployee>,
      },
      {
        path: "/requestAsset",
        element: <RequestedAssets></RequestedAssets>,
      },
      {
        path: "/team",
        element: <MyTeam></MyTeam>,
      },
    ],
  },
]);
