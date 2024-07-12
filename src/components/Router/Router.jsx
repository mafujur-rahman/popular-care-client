import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../layout/pages/Home/Home";
import Login from "../layout/pages/Login/Login";
import Register from "../layout/pages/Register/Register";
import MainHome from "../layout/pages/Home/MainHome/MainHome";
import AboutUsPage from "../layout/pages/AboutUsPage/AboutUsPage";
import ServicesPage from "../layout/pages/ServicesPage/ServicesPage";
import ContactPage from "../layout/pages/ContactPage/ContactPage";
import UserDashboard from "../layout/pages/Dashboard/UserDashboard/UserDashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path:"/",
            element: <MainHome></MainHome>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/about-us',
          element:<AboutUsPage></AboutUsPage>
        },
        {
          path:'/services',
          element:<ServicesPage></ServicesPage>
        },
        {
          path:'/contact',
          element:<ContactPage></ContactPage>
        },
        {
          path:"/profile",
          element:<UserDashboard></UserDashboard>
        }
      ]
    },
  ]);

  

export default router;