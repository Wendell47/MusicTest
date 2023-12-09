import { LuChevronDown } from "react-icons/lu";
import { Container } from "./style";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
export default function CollapseSection({title,collapsed,children,sticky, flexRow,icon, onlyOnMobile = false}){
    const [active,setActive]=useState(!collapsed ? collapsed : true)

    return(
            <Container className={`${sticky ? 'sticky': ''} ${onlyOnMobile ?'hideOnDesktop':''}`}>
                <section><span> {icon} {title}</span> <LuChevronDown onClick={() => setActive(active ? false : true)}/></section>
                <div className={`Content ${active ? 'hide' : ''} ${flexRow ? 'flexRow': ''}`}>
                  {children} 
                </div>
            </Container>
    )
}