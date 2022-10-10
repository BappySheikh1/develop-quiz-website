import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from '../components/Home/Home'
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router =createBrowserRouter([
    {
     path:'/',
     errorElement: <ErrorPage />,
     element: <Main />,
     children:[
        {
          path:'/',
          element: <Home />
        },
     ]
    },
])