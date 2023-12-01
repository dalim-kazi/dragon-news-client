import { createBrowserRouter } from "react-router-dom";
import Main from "../loyout/Main";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/catagory/Catagory/Catagory";
import News from "../pages/News/News/News";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";
import TermsAndConditins from "../pages/termsAndConditions/TermsAndConditins";
import ProfileDetails from "../pages/ProfileDetails/ProfileDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path: "/catagory/:id",
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`http://localhost:5000/news-catagory/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path: "/termsConditions",
                element:<TermsAndConditins></TermsAndConditins>
            },
            {
                path: "/profileDetails",
                element:<PrivateRoutes><ProfileDetails></ProfileDetails></PrivateRoutes>
            }
        ]
   } 
])