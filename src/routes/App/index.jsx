import { Route, Routes } from "react-router-dom";
import SongDetailSection from "../../pages/songDetailSection";
import Home from "../../pages/Home";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/Song" element={<SongDetailSection/>}/>    
            <Route path="/" element={<Home/>}/>    
        </Routes>
    )
}