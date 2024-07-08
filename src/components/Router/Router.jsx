import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../layout/pages/Home/Home";
import Banner from "../layout/pages/Home/Banner/Banner";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path:"/",
            element: <Banner></Banner>
        }
      ]
    },
  ]);

  

export default router;