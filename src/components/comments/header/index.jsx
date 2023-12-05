import { Container, SearchBar } from "./style"
import logo from "../../../assets/logo-v3.svg"
import { LuMenu, LuSearch } from "react-icons/lu"
import { useState } from "react"
export default function Header() {
    const[active,setActive] = useState()

    return(
        <>
        <Container>
            <div>
            <a className="logo" href="#"><img src={logo} alt="" /><span>Músicas Bahais</span></a>
            
            <SearchBar
            >
                <LuSearch/>
                <input type="search" placeholder="Pesquisar música"/>
            </SearchBar>
            
            <div className="menu">
            <button className="menuBtn" onClick={()=> setActive(active ? false : true)}><LuMenu/></button>
            <ul className={active? 'hide': ''}>
                <li>
                    <a href="#">Músicas</a>
                </li>
                <div className="line"></div>
                <li>
                    <button href="#" className="secondary">Música Aleatória</button>
                </li>
                <li>
                    
                    <button href="#" className="primary">Envie Sua música</button>
                </li>
            </ul>
            </div>
            </div>
        </Container>
        
        </>
    )
}