import { Banner, Card, Card2, Card3, Container, PrevButton, Section } from "./style";
import Img from "../../assets/bannerImg.webp";
import { LuArrowRight, LuChevronLeft, LuChevronRight, LuShare } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Songs } from "../../components/Music";
import { useEffect, useState } from "react";
export default function Home(){

const[scrollInicial,setScrollInicial] = useState(0)

let div 
let divWidth 
let maxWidth = 0
let L 
function MoveLeft(){
    div = document.getElementById("Content-1")
    L = div.scrollLeft
    maxWidth = div.scrollWidth
    div.scrollTo(L - (maxWidth /5),0)
    handleActiveButton()
}

function MoveRight(){

    div = document.getElementById("Content-1")
    divWidth = div.clientWidth
    L = div.scrollLeft
    maxWidth = div.scrollWidth 
    div.scrollTo(L + (maxWidth /5),0)
    handleActiveButton()
}

function handleActiveButton(){
    
   
    console.log(divWidth - L )
    console.log(divWidth)
    const button = document.getElementById("next_btn")
    if (divWidth -L  >= divWidth){
        button.classList.add("active")
    }
    else{
        button.classList.remove("active")
    }
}   


  

    const navigate = useNavigate ()
    return(
       <Container>
            <Banner>
                <div>
                <h1>Aprenda e ouça com músicas que <span>inspiram a alma.</span></h1>
                <p>
                Escute sua música favorita, aprenda a brincar com letras,
                acordes e vídeos e cante com sua comunidade.
                </p>
                <div className="Tags">
                <button>
                    Inspiração
                </button>
                <button>
                    História da fé
                </button>
                <button>
                    oração
                </button>
                <button>
                    citação
                </button>
                </div>
                </div>
                <img src={Img} alt="" />
            </Banner>
            <Section>
                <section>
                    <div>
                    <h3>
                        Seleções 
                    </h3>
                    
                    </div>
                    <PrevButton >
                         <LuChevronLeft onClick={()=>MoveLeft() }id='prev_btn'/> <LuChevronRight onClick={()=>MoveRight()}id='next_btn'/>
                    </PrevButton>
                </section>
                
                <div className="sectionContent" id="Content-1" >
                    {Songs.map(item =>(
                        <Card2 key={String(item.id)} className={item.colorTheme} onClick={() =>navigate(`/songs/${item.id}`)}>
                                        
                        <div>
                        <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div>
                        <h4>Momento Devocional</h4>
                       
                        </div>
                        
                        </Card2>
                    ))}
                
                </div>
            </Section>

            <Section>
                <section>
                    <div>
                    <h3>
                        Novas Músicas
                    </h3>
                   
                    </div>
                    
                </section>
                
                <div className="sectionContent">
                    {Songs.map(item =>(
                        <Card key={String(item.id)} className={item.colorTheme} onClick={() =>navigate(`/songs/${item.id}`)}>
                                        
                        <img src={item.thumbnail} alt={item.title} />
                        <div>
                        <h4>{item.title}</h4>
                        <p>{item.artist}</p>
                        </div>
                        <div className="Tags">
                        <LuShare/>
                        <button>{item.tag}</button>
                        </div>

                        </Card>
                    ))}
                
                </div>
            </Section>
            <Section>
                <section>
                    <div>
                    <h3>
                       Lista de Músicas
                    </h3>
                    
                    </div>
                    <a href="#">Ver mais <LuArrowRight/></a>
                </section>
                
                <div className="sectionContent flexWrap">
                    {Songs.map(item =>(
                        <Card3 key={String(item.id)} className={item.colorTheme} onClick={() =>navigate(`/songs/${item.id}`)}>
                            <img src={item.thumbnail} alt={item.title} />
                         <div>
                       
                        <h4>{item.title}</h4>
                        <p>{item.artist}</p>
                       
                        <div className="Tags">
                       
                        <button>{item.tag}</button>
                        
                        </div>

                         </div>
                        </Card3>
                    ))}
                    
                </div>
            </Section>
           
       </Container>
    )
}