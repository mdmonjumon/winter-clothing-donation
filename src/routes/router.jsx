import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonateDetails from "../pages/DonateDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import UpdateProfile from "../pages/UpdateProfile";
import ForgotPassword from "../pages/ForgotPassword";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/donation-campaigns',
                element:<DonationCampaigns></DonationCampaigns>,
                loader: ()=>fetch('/fakeData.json')
            },
            {
                path:'/donation-campaigns/:id',
                element:<PrivateRoute><DonateDetails></DonateDetails></PrivateRoute>,
                loader: ()=>fetch('/fakeData.json')
            },

        ]
    },

    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },

    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/update-profile',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
    },
    {
        path:'/forgot-password',
        element:<ForgotPassword></ForgotPassword>
    }
])



export default router;