import { Container, SearchBar } from "./style"
import logo from "../../assets/logo-v3.svg"
import { LuMenu, LuSearch } from "react-icons/lu"
import { useState } from "react"
import ThemeSwitch from "../ThemeSwitch"
export default function Header() {
    const[active,setActive] = useState(false)

    return(
        <>
        <div className="noOficial" style={{'display':'none'}}>
          <div>
          <span>
          Inspirado pela Fé Bahá'í
          </span>
           <p>
           Este site foi construído por voluntários e portanto, não deve ser considerado oficial da comunidade bahá´í. Para mais informações acesse bahai.org.br
           </p>
           <button>
                Entendi
            </button>
            </div>
           
          </div>
        <Container>
            
            <div>

            <a className="logo" href="/"><img src={logo} alt="" /><span>Músicas de Unidade</span>
            
            </a>
            
            <SearchBar
            >
                <LuSearch/>
                <input type="search" placeholder="Pesquisar música"/>
            </SearchBar>
            
            <div className="menu">
            <button className="menuBtn" onClick={()=> setActive(active ? false : true)}><LuMenu/></button>
            <ul className={active ?'': 'hide'}>
                
                <li>
                    <a href="/songs">Músicas</a>
                </li>
                <div className="line"></div>
                <li>
                    <button href="#" >Música Aleatória</button>
                </li>
                <li>
                    
                    <button href="#" className="primary">Envie Sua música</button>
                </li>
            <div className="line"></div>
            <ThemeSwitch/>
            </ul>
            </div>
            </div>
        </Container>
        
        </>
    )
}