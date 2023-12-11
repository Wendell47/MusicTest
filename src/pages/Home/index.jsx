import { Banner, Card, Container, Section } from "./style";
import Img from "../../assets/bannerImg.webp";
import Img2 from "../../assets/thumb2.webp";
import thumb1 from "../../assets/thumb.webp";
import thumb3 from "../../assets/thumb3.webp";
import thumb4 from "../../assets/thumb4.webp";
import { LuArrowRight, LuShare } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
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
                        Novas Músicas
                    </h3>
                    <span>
                        veja as novidades
                    </span>
                    </div>
                    <a href="#">Ver mais <LuArrowRight/></a>
                </section>
                
                <div className="sectionContent">
                <Card style={{background: '#FFE5E0'}}>
                    <img src={thumb1} alt="" />
                    <div>
                    <h4>Navegantes da Vida</h4>
                    <p>Max Willeck</p>
                    </div>
                    <div className="Tags">
                    <LuShare/>
                    <button>Rock</button>
                    </div>
                    
                </Card>
                <Card style={{background: '#FFE5E0'}}>
                    <img src={Img2} alt="" />
                    <div>
                    <h4>Qa'Ím</h4>
                    <p>Gabriel Carigé</p>
                    </div>
                    <div className="Tags">
                    <LuShare/>
                    <button>Historia da fé</button>
                    </div>
                </Card>
                <Card style={{background: '#FFF3CF'}}>
                    <img src={thumb3} alt="" />
                    <div>
                    <h4>Inexistência</h4>
                    <p>Marcos Gardinalli</p>
                    </div>
                    <div className="Tags">
                    <LuShare/>
                    <button>Citação</button>
                    </div>
                </Card>
                <Card style={{background: '#E2D6FF'}}>
                    <img src={thumb4} alt="" />
                    <div>
                    <h4>Ensinar</h4>
                    <p>Djamile Carreiro</p>
                    </div>
                    <div className="Tags">
                    <LuShare/>
                    <button>Inspiração</button>
                    </div>
                </Card>
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
                <Card className="orange" onClick={() =>navigate('/song')}>
                    
                    <img src={thumb1} alt="" />
                    <div>
                    <h4>Navegantes da Vida</h4>
                    <p>Max Willeck</p>
                    </div>
                    <div className="Tags">
                    <button>Rock</button>
                    </div>
                    
                </Card>
                <Card className="orange">
                    <img src={Img2} alt="" />
                    <div>
                    <h4>Qa'Ím</h4>
                    <p>Max Willeck</p>
                    </div>
                    <div className="Tags">
                    <button>Rock</button>
                    </div>
                </Card>
                <Card className="yellow">
                    <img src={thumb3} alt="" />
                    <div>
                    <h4>Inexistência</h4>
                    <p>Marcos Gardinalli</p>
                    </div>
                    <div className="Tags">
                    <button>Rock</button>
                    </div>
                </Card>
                <Card className="purple">
                    <img src={thumb4} alt="" />
                    <div>
                    <h4>Ensinar</h4>
                    <p>Djamile Carreiro</p>
                    </div>
                    <div className="Tags">
                    <button>Citação</button>
                    </div>
                </Card>
                </div>
            </Section>
           
       </Container>
    )
}