import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from '../components/Home/Home'
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Topics from "../components/Topics/Topics";
import Blog from "../components/Blog/Blog"
import Statistics from "../components/Statistics/Statistics";

 
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
        {
          path:'/home',
          element: <Home />
        },
        {
          path:'/topics',
          element: <Topics />
        },
        {
          path:'/blog',
          element: <Blog />
        },
        {
          path:'/statistics',
          element: <Statistics />
        },
     ]
    },
])