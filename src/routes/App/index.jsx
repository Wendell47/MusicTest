import { Route, Routes } from "react-router-dom";
import SongDetailSection from "../../pages/songDetailSection";
import Home from "../../pages/Home";
import ListSongs from "../../pages/listSongs";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>    
            <Route path="/songs" element={<ListSongs/>}/>    
            <Route path="/songs/:id" element={<SongDetailSection/>}/>    
        </Routes>
    )
}