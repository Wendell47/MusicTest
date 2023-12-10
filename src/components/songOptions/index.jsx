import { LuFacebook, LuInstagram, LuMusic, LuMusic2, LuShare, LuTwitter, LuYoutube } from "react-icons/lu"
import { ShareContent, SongChord } from "./styles"
import img from '../../assets/thumb.webp'
import { useContext } from "react"
import { MeuContexto } from "../../context/Context"
// eslint-disable-next-line react/prop-types
export default function SongOptions({HideOnMobile=false}){

    const{value,setValue,key,count,setCount} = useContext(MeuContexto)

    return(
    <SongChord className={`animation_slide_right ${HideOnMobile ? 'hideMobile': 'showOnMobile' }`}>
         
            <div className='sticky'>
            <button className='primary'><LuMusic strokeWidth={3}/> Baixar Partitura</button>
            <button className='secondary'> <LuMusic2 strokeWidth={3}/>Baixar Cifra</button>
            <button className='tomChange'> <span onClick={() => setCount(count - 1)}>-</span> {key ? key : 'loading'} 
            <span onClick={() => setCount(count +1)}>+</span></button>
            <button className='fontSize'> 

              <span onClick={()=>{setValue(value >= 1.1 ? value - 0.1: 1 )}}>A</span> 
              <p>tamanho</p> 
              <span onClick={()=>{setValue(value <=1.5 ? value + 0.1 : value)}}>A</span>
            </button>

            <ShareContent className='hide'>
            <button onClick={() => {}}><LuShare strokeWidth={3}/>compartilhar</button>
            <div className="hide">
               <span className='luFacebook'><LuFacebook/></span>
               <span className='LuYoutube'><LuYoutube/></span>
               <span className='LuTwitter'><LuTwitter/></span>
               <span className='LuInstagram'><LuInstagram/></span>
            </div>
            </ShareContent>
            <span className='line'></span>
            </div>
          </SongChord>
        
    )
}