import {createBrowserRouter} from 'react-router-dom';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Main from "./layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ()=> fetch("quiz.json"),
        children:[
            {
                path: '/',
                loader: ()=> fetch("quiz.json"),
                element: <Home></Home>
            },
            {
                path: '/quiz/:id',
                element: <Quiz></Quiz>
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