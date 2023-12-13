import { LuChevronDown } from "react-icons/lu";
import { Container } from "./style";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
export default function CollapseSection({title,collapsed,children,sticky, flexRow,icon='', onlyOnMobile = false, border = true}){
    const [active,setActive]=useState(!collapsed ? collapsed : true)

    return(
            <Container className={`${sticky ? 'sticky': ''} ${onlyOnMobile ?'hideOnDesktop':''}
            ${border ?'border':''}`
            }
            
            >
                <section onClick={() => setActive(active ? false : true)}><span> {icon} {title}</span> <LuChevronDown/></section>
                <div className={`Content ${active ? 'hide' : ''} ${flexRow ? 'flexRow': ''}`}>
                  {children} 
                </div>
            </Container>
    )
}