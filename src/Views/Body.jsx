import "../styles/body.css"
import Navigation from "../components/Navigation"
import Login from "./Login"
import Signin from "./Signin"
import Products from "./Products"
import { Routes, Route } from "react-router-dom"
import NotFound from "./NotFound"
export default function Body(){
    return <>
        <Navigation />
        <Routes>
            <Route path="login" element={<Login />}/>
            <Route path="signin" element={<Signin />}/>
            <Route path="/" element={<Login />}/>
            <Route path="products" element={<Products />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </>
}