import { createBrowserRouter } from "react-router";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Loading from "../Component/Loading/Loading";
import RootLayout from "../Layout/RootLayout";
import Home from "../Component/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loading></Loading>,
    children:[
      {
        index:true,
        Component:Home
      }
    ]
  },
]);