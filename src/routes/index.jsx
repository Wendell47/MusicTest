import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./App";

export default function Routes(){
    return(
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}