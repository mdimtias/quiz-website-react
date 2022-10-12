import {createBrowserRouter} from 'react-router-dom';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Statistics from './components/Statistics/Statistics';
import Main from "./layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                loader: ()=> fetch("https://openapi.programming-hero.com/api/quiz"),
                element: <Home></Home>
            },
            {
                path: '/quiz/:id',
                element: <Quiz></Quiz>
            },
            {
                path: '/statistics',
                loader: ()=> fetch("https://openapi.programming-hero.com/api/quiz"),
                element: <Statistics></Statistics>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
        
    }
])
export default router;