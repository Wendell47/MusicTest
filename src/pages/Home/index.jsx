import { Banner, Card, Card2, Container, Section } from "./style";
import Img from "../../assets/bannerImg.webp";
import { LuArrowRight, LuShare } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Songs } from "../../components/Music";
export default function Home(){
 
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
                    <span>
                        Seleções de músicas para varias ocasiões
                    </span>
                    </div>
                    
                </section>
                
                <div className="sectionContent" >
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
                    <span>
                        veja as novidades
                    </span>
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
                        Novas Músicas
                    </h3>
                    <span>
                        veja as novidades
                    </span>
                    </div>
                    <a href="#">Ver mais <LuArrowRight/></a>
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
           
       </Container>
    )
}