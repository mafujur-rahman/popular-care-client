import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../layout/pages/Home/Home";
import Banner from "../layout/pages/Home/Banner/Banner";
import Login from "../layout/pages/Login/Login";


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
        }
      ]
    },
  ]);

  

export default router;