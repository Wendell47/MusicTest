import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./App";
import { useState } from "react";
import { Loading } from "../pages/songDetailSection/style";
import Logo from '../assets/logo-v3.svg'

export default function Routes(){

    const [isLoaded,setIsLoaded] = useState()

    window.addEventListener('load',() =>{

        setIsLoaded(true)
        
    })

    return(
        <BrowserRouter>
        {!isLoaded ? <Loading id='LoadingScreen'>
         <img src={Logo} alt="" className='animation_Loading' 
        />

    </Loading>
    :
    <></>
    }
            <AppRoutes/>
        </BrowserRouter>
    )
}