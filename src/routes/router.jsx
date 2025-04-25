import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonateDetails from "../pages/DonateDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
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
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    },

    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
])



export default router;