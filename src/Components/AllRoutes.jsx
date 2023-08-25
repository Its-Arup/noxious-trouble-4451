import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Ourstory from "../Pages/Ourstory";
import Community from "../Pages/Community";
import Ourmission from "../Pages/Ourmission";
import About from "../Pages/About";
import Login from "../Pages/Login";

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
        </Routes>
        </>
    )
}

export default AllRoutes