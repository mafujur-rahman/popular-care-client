import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../layout/pages/Home/Home";
import Banner from "../layout/pages/Home/Banner/Banner";
import Login from "../layout/pages/Login/Login";
import Register from "../layout/pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path:"/",
            element: <Banner></Banner>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

  

export default router;