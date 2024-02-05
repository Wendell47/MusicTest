import { Banner, Card, Card2, Container, PrevButton, Section } from "./style";
import Img from "../../assets/bannerImg.webp";
import { LuArrowRight, LuChevronLeft, LuChevronRight, LuShare } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Songs } from "../../components/Music";
import { useEffect, useState } from "react";
import { Loading } from "../songDetailSection/style";
import Logo from '../../assets/logo-v3.svg'
import SongCardList from "../../components/SongCardList";
export default function Home(){



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

const [isLoaded,setIsLoaded] = useState(false)

useEffect(() =>{
    
    window.addEventListener('load',() =>{

      setIsLoaded(true)
      
  })

  },[isLoaded])


    const navigate = useNavigate ()
    return(
        <>
          {!isLoaded ? <Loading id='LoadingScreen'>
         <img src={Logo} alt="" className='animation_Loading' 
        />

    </Loading>
    :
    <></>
    }
       
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
                    <span>Músicas selecionadas para ocasiões especiais</span>
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
                        Destaques
                    </h3>
                   <span>Musicas inspiradoras</span>
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
                        <button>{item.tag}</button>
                        <LuShare/>
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
                    <span>Veja as músicas da comunidade </span>
                    </div>
                    <a href="#">Ver mais <LuArrowRight/></a>
                </section>
                
                <div className="sectionContent flexWrap">
                    {Songs.map(item =>(
                        <SongCardList 
                        data={item}
                        key={String(item.id)} 
                        className={item.colorTheme} 
                        onClick={() =>navigate(`/songs/${item.id}`)}
                        >
                          
                        </SongCardList>
                    ))}
                    
                </div>
            </Section>
           
       </Container>
       </>
    )
}