import { createBrowserRouter } from "react-router";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Loading from "../Component/Loading/Loading";
import RootLayout from "../Layout/RootLayout";
import Home from "../Component/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import Pricing from "../Pages/Pricing/Pricing";
import BeARider from "../Pages/BeARider/BeARider";
import Error from "../Component/Error/Error";
import Authlayout from "../Layout/Authlayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ForgetPassword from "../Pages/Auth/ForgetPassword/ForgetPassword";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layout/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcel/MyParcels";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/coverage",
        loader: async () => {
          const res = await fetch("/serviceCenter.json");
          return res.json();
        },

        Component: Coverage

      }
      ,{
        path:"aboutus",
        Component: AboutUs
      },
      {
        path:"services",
        Component: Services
        
      },
      {
        path:"sendaparcel",
        loader: async () => {
          const res = await fetch("/serviceCenter.json");
          return res.json();
        },
        element:<PrivateRoutes>
          <SendParcel></SendParcel>
        </PrivateRoutes>
      },
      {
        path:"pricing",
        Component: Pricing
      },
      {
        path:"bearider",
        element:<PrivateRoutes>
          <BeARider></BeARider>
        </PrivateRoutes>
      },
      {
        path:"/*",
        Component: Error
      }
    ]
  },
  {
    path:"/",
    element:<Authlayout></Authlayout>,
    children:[
      {
        path:"login",
        Component: Login

      },
      {
        path:"register",
        Component:Register
      },
      {
        path:"forgetpassword",
        Component:ForgetPassword
      }
    ]
  },
  {
    path:"dashboard",
    element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children:[
      {
        path:"myparcels",
        Component: MyParcels
      }
    ]
  }
]);