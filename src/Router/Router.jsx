import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Home/Projects/ProjectDetails/ProjectDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPgae";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    },
    {
        path:'details/:id',
        Component:ProjectDetails
    }
])