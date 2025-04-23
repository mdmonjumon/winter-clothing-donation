import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonateDetails from "../pages/DonateDetails";


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
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/donation-campaigns/:id',
                element:<DonateDetails></DonateDetails>,
                loader: ()=>fetch('/fakeData.json')
            }
        ]
    }
])



export default router;