import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Ourstory from "../Pages/Ourstory";
import Community from "../Pages/Community";
import Ourmission from "../Pages/Ourmission";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ourstory" element={<Ourstory/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/ourmission" element={<Ourmission/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes