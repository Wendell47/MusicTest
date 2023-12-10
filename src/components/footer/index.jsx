import { LuInstagram, LuYoutube } from "react-icons/lu";
import { Container } from "./styles";

export default function Footer(){
    return(
        <Container>
            <div className="container">
               

                <div>
                    <div>
                        BahArte Músicas 2023
                    </div>

                    <div>
                        <a href="#">Termos de uso</a>    
                        <a href="#">Política de privacidade</a>    
                    </div> 
                    <div className='social'>
                        <span>Siga-nos</span>
                        <a href="#"><LuYoutube/></a>    
                        <a href="#"><LuInstagram/></a>    
                    </div> 
                </div>
             </div>
        </Container>
    )
}