import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from '../components/Home/Home'
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog"
import Statistics from "../components/Statistics/Statistics";
import CardDetails from "../components/CardDetails/CardDetails";
import { getQuizData } from "../Loader/Loader";

 
export const router =createBrowserRouter([
    {
     path:'/',
     errorElement: <ErrorPage />,
     loader: getQuizData,
     element: <Main />,
     children:[
        {
          path:'/',
          // loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path:'/topics',
          element: <Home/>
        },
        {
          path:'/blog',
          element: <Blog />
        },
        {
          path:'/statistics',
          element: <Statistics />
        },
        {
           path:'/home/:id',
           loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
           element: <CardDetails />
        }
     ]
    },
])