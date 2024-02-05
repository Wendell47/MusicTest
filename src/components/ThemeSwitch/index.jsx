import { useEffect, useState } from "react";
import { Container } from "./styles";
import { LuChevronDown,LuContrast, LuMoon, LuSun } from "react-icons/lu";

export default function ThemeSwitch(){
    const currentTheme = localStorage.getItem('theme')

    const[hide,setHide]=useState('hide')
    const[theme,setTheme]=useState(currentTheme ? currentTheme : 'Default')
    const [icon,setIcon] = useState(<LuContrast/>)
    
   
    
    useEffect(()=>{
        function handleThemeSwitch(){
            function handleTheme(e){
                localStorage.setItem('theme', e)
            }
            const root = document.getElementById('root')
            if (theme == 'Light'){
                setIcon(<LuSun/>)
                root.classList.remove('dark')
                root.classList.add('light')
                handleTheme('Light')
            }
            else if (theme == 'Dark'){
                setIcon(<LuMoon/>)
                root.classList.remove('light')
                root.classList.add('dark')
                handleTheme('Dark')
            }
            else if (theme == 'Default'){
                setIcon(<LuContrast/>)
                root.classList.remove('dark')
                root.classList.remove('light')
                handleTheme('Default')
            }
        }

        handleThemeSwitch()
        
    },[theme])
    return(
    
        <Container>
            <p onClick={()=>setHide(hide == 'hide' ? '':'hide')}>{icon}<LuChevronDown/></p>
            <div className={hide}>
                <p onClick={()=>setTheme("Default")} className={theme=='Default' && 'active'}><LuContrast/>Sistema</p>
                <p onClick={()=>setTheme("Light")}className={theme=='Light' && 'active'}><LuSun/> Light</p>
                <p onClick={()=>setTheme("Dark")}className={theme=='Dark' && 'active'}> <LuMoon/>Dark</p>
            </div>
        </Container>
    )
}