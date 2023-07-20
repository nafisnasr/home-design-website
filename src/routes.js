import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Products from "./Pages/Products/Products"
import Questions from "./Pages/Questions/Questions"
import Register from "./Pages/Register/Register"

let routes=[
    {path:'/' , element:<Home/>},
    {path:'/home' , element:<Home/>},
    {path:'/about' , element:<About/>},
    {path:'/products' , element:<Products/>},
    {path:'/questions' , element:<Questions/>},
    {path:'/register' , element:<Register/>},
]

export default routes;