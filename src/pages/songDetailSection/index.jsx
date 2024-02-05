
import './App.css'
import '../../styles/animations.css'
import ChordSheetJS from 'chordsheetjs';
import { About, Container,ChordL, Navigation, VideoPlayer, Loading} from './style';
import { LuMusic4, LuPlay} from 'react-icons/lu'
import {useContext, useEffect, useState } from 'react';
import ChordNote from '../../assets/chord1.svg'
import ChordNote2 from '../../assets/chord2.svg'
import ChordNote3 from '../../assets/chord3.svg'
import ChordNote4 from '../../assets/chord4.svg'
import ChordNote5 from '../../assets/chord5.svg'
import ChordNote6 from '../../assets/chord6.svg'
import ChordNote7 from '../../assets/chord7.svg'
import ChordNote8 from '../../assets/chord8.svg'
import Modal from '../../components/Modal'
import CollapseSection from '../../components/CollapseSection'
import SongOptions from '../../components/songOptions';
import { MeuContexto } from '../../context/Context';
import { useParams } from 'react-router-dom';
import { Songs } from '../../components/Music';
import Logo from '../../assets/logo-v3.svg'
export default function SongDetailSection() {
  const [transposedChord,setTransposedChord] = useState()
  const [play,setPlay] = useState(false)
  const [active,setActive] = useState(true)
  const [Music,setMusic] = useState(null)
  const {value,count,key,setKey,updated,setUpdated} = useContext(MeuContexto)


  
const params = useParams()
 


useEffect(()=>{
  
  ChangeChord()

},[count,Music])
useEffect(()=>{
  
  async function fetchMusic(){
    try{
      const data = await Songs[params.id-1]
      setMusic(data)
    }catch{
      console.log("Failed to fetch")
    }

  }
  fetchMusic()
  
},[params.id])

function ChangeChord(){
  let fixChord
  let tranposedChard
  let formatedChord

  if(Music){
    
  const parser = new ChordSheetJS.ChordProParser()
  const setSong = parser.parse(Music.chord)
  const formatter = new ChordSheetJS.HtmlDivFormatter()

  setKey(Music.key)
 
 
  if (count){
   
    tranposedChard = setSong.transpose(count)
    console.log(tranposedChard.key)
    setKey(tranposedChard.key)

    formatedChord= formatter.format(tranposedChard)
    fixChord = formatedChord.replace(/dim/g,'°')  
  }
  else if (count==0){
    formatedChord = formatter.format(setSong)
    fixChord = formatedChord.replace(/dim/g,'°')
  }

  }
  

  setTransposedChord(fixChord)
  setUpdated(!updated)
}

const [isLoaded,setIsLoaded] = useState(false)


  useEffect(() =>{
    
    window.addEventListener('load',() =>{

      setIsLoaded(true)
      
  })

  },[isLoaded])


  return (
   <>
  {
      Music ?

      <Container>
              <Navigation aria-label="Breadcrumb">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#">Músicas</a></li>
                  <li><span aria-current="page">{Music.title}</span></li>
                </ul>
              </Navigation>
              
             
              <SongOptions 
              soundCloundId={Music.soundCloundId}
              HideOnMobile={true}
              />
              
           <ChordL className='animation_slide_up'>
             
              <section className='TitleContent'>
                <h1>{Music.title}</h1>
                <h2>{Music.artist}</h2>
                <p>Tom: <span>{key}</span></p>
              </section>
              

              <CollapseSection
                title='Acordes'
                sticky={true}
                flexRow={true}
                collapsed={true}
                icon={<LuMusic4/>}
                onlyOnMobile={true}
                >
                <div>
                  <span>C</span>
                  <img src={ChordNote} alt="" />
                </div>
                <div>
                <span>C</span>
                <img src={ChordNote2} alt="" />
                </div>
                <div>
                <span>C</span>
                <img src={ChordNote3} alt="" />
                </div>
                <div>
                <span>C</span>
                <img src={ChordNote4} alt="" />
                </div>
                <div>
                <span>C</span>
                <img src={ChordNote5} alt="" />
                </div>
                
                <div>
                <span>C</span>
                <img src={ChordNote6} alt="" />
                </div>
                
                <div>
                <span>C</span>
                <img src={ChordNote7} alt="" />
                </div>
                
                <div>
                <span>C</span>
                <img src={ChordNote8} alt="" />
                </div>
                </CollapseSection>
              <div id='Chord' style={{fontSize : `${value}rem`}}>
              <Modal
              /> 
                {
                   
                    <div dangerouslySetInnerHTML={{ __html: transposedChord}}
                    className='animation'
                    />
                   
                }
              </div>
            </ChordL>
                
            <About className='animation_slide_left' >
                
              
              <div className={active ? 'hide': ''}>

                <SongOptions
                soundCloundId={Music.soundCloundId}
                />
                <VideoPlayer>
                  <div className={play ? 'hide' : ''}>
                  <span className='playBtn' onClick={()=>setPlay(!play)}><LuPlay/></span>
                  <img src={Music.thumbnail} alt="" />
                  </div >

                  {play ? <iframe style={{width:"100%",height:"100%",border:0}}src={`${Music.youtubeLink}?autoplay=1;start=2;`} title={`${Music.title} - ${Music.artist}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : ''}
                </VideoPlayer>
                
                <CollapseSection
                title='Sobre a Música'
                collapsed={false}
                //icon={<LuInfo/>}
                border={false}
                >
                  <p>
                 {
                  Music.description
                 }
                  </p>
                  <p>
                  artista: <span>{Music.artist}</span> <br/>
                  compositor: <span>{Music.artist}</span>
                  </p>

                </CollapseSection>

                <CollapseSection
                  title='Acordes'
                  sticky={true}
                  //icon={<LuMusic4/>}
                  border={false}
                  collapsed={true}
                  >
                  <div>
                    <span>C</span>
                    <img src={ChordNote} alt="" />
                  </div>
                  <div>
                  <span>C</span>
                  <img src={ChordNote2} alt="" />
                  </div>
                  <div>
                  <span>C</span>
                  <img src={ChordNote3} alt="" />
                  </div>
                  <div>
                  <span>C</span>
                  <img src={ChordNote4} alt="" />
                  </div>
                  <div>
                  <span>C</span>
                  <img src={ChordNote5} alt="" />
                  </div>
                  
                  <div>
                  <span>C</span>
                  <img src={ChordNote6} alt="" />
                  </div>
                  
                  <div>
                  <span>C</span>
                  <img src={ChordNote7} alt="" />
                  </div>
                  
                  <div>
                  <span>C</span>
                  <img src={ChordNote8} alt="" />
                  </div>
                </CollapseSection>
              </div>
              <span  className='HideButtonBar' >
                <div onClick={()=>setActive(active ? false : true)}><div/></div>
            </span>
            </About>
           
       </Container>
        :
        <Loading id='LoadingScreen'>
         <img src={Logo} alt="" className='animation_Loading' 
        />

    </Loading>
     }
        
       </>
    
  )
}

