import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../layout/pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            
        }
      ]
    },
  ]);

  

export default router;