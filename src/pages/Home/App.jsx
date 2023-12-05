
import './App.css'
import './animations.css'
import ChordSheetJS from 'chordsheetjs';
import Header from '../../components/comments/header';
import { About, Container,ChordL, SongChord, Navigation} from './style';
import {LuMusic,LuMusic2, LuChevronRight, LuShare} from 'react-icons/lu'
import img from '../../assets/thumb.webp'
import {useEffect, useState } from 'react';
import ChordNote from '../../assets/chord1.svg'
import ChordNote2 from '../../assets/chord2.svg'
import ChordNote3 from '../../assets/chord3.svg'
import ChordNote4 from '../../assets/chord4.svg'
import ChordNote5 from '../../assets/chord5.svg'
import ChordNote6 from '../../assets/chord6.svg'
import ChordNote7 from '../../assets/chord7.svg'
import ChordNote8 from '../../assets/chord8.svg'
import Modal from '../../components/comments/Modal';

function App() {
  const [chordId,setChordId] = useState()
  const [key,setKey] = useState()
  const [cont,setCont] = useState(0)
  const [fontSized,setFontSized] = useState(1)
  const [transposedChord,setTransposedChord] = useState()
  const [FormatedChord,setFormatedChord] = useState()

  const chordSheet = (`
{meta: key Am}
{key: Am}

{comment: Intro (x2) }
[Am] [|][F°] [|] [Am][|] [F°]

{comment: 1° Verso }
[Am]Caminhar [F°]passo a passo a [Am]te encontrar, [F°]solto ao vento eu [C]cruzo o mar
[B°]Navegante da [Am]vida, e é tão [FM7]bom
[Am]Conhecer [F°]nos Teus olhos o [Am]meu irmão, [F°]dar-te a força das [C]minhas mãos
[B°]Dar-te o riso que [Am]vibra dentro em [FM7]mim

{comment: Refrão }
[C]É tão bom, [B°]sermos ecos da [Am]mesma voz, [G]sermos raios da [F]mesma luz
[G7]Sermos filhos do a[C]mor [E7]
[C]É tão bom, [B°]tu e eu nos tor[Am]nando nós, [G]pela força que [F]vem de Deus, [G7]nos tomamos só [Am]um

{comment: 2° Verso }
[Am]Te abraçar, [F°]com a força do [Am]meu amor, [F°]ser alívio pra [C]tua dor
[B°]Te curar as fe[Am]ridas e é tão [FM7]bom
[Am]Te levar [F°]e ir também ao mes[Am]mo lugar, [F°]onde todos vão [C]encontrar
[B°]Da semente o [Am]fruto em cada [FM7]um

{comment: Refrão }
[C]É tão bom, [B°]sermos ecos da [Am]mesma voz, [G]sermos raios da [F]mesma luz
[G7]Sermos filhos do a[C]mo[E7]r
[C]É tão bom, [B°]tu e eu nos tor[Am]nando nós, [G]pela força que [F]vem de Deus, [G7]nos tomamos só [Am]um 
  `)
  

useEffect(()=>{

  ChangeChord()


},[cont])


const parser = new ChordSheetJS.ChordProParser()
const setSong = parser.parse(chordSheet)
const formatter = new ChordSheetJS.HtmlDivFormatter()

function ChangeChord(){
  let tranposedChard
  const getkey = setSong.key
  setKey(getkey)
  if (cont > 0 || cont < 0 ){
   
    tranposedChard = setSong.transpose(cont)
    setKey(tranposedChard.key)
    setTransposedChord(formatter.format(tranposedChard))
  }
  else if(cont == 0 & !FormatedChord){
    setFormatedChord(formatter.format(setSong))
  }
 
}

  return (
    <>
      <Header/>
        <Container>
              <Navigation>
                <span>Início</span><LuChevronRight/>
                <span>Músicas</span> <LuChevronRight/> <span>Navegantes da vida</span>
              </Navigation>
              
          <SongChord className='animation_slide_right'>
            <img src={img}/>
            <div className='sticky'>
            <button className='primary'><LuMusic strokeWidth={3}/> Baixar Partitura</button>
            <button> <LuMusic2/>Baixar Cifra</button>
            <span className='line'></span>
            <button className='tomChange'> <span onClick={() => setCont(cont - 1)}>-</span> {key ? key : 'loading'} 
            <span onClick={() => setCont(cont +1)}>+</span></button>
            <button className='fontSize'> 
              <span onClick={()=>{setFontSized(fontSized >= 1.1 ? fontSized - 0.1: 1 )}}>A</span> 
              <p>tamanho</p> 
              <span onClick={()=>{setFontSized(fontSized <=1.5 ? fontSized + 0.1 : fontSized)}}>A</span>
            </button>
            <span className='line'></span>
            <button><LuShare/>compartilhar</button>
            </div>
          </SongChord>
           <ChordL className='animation_slide_up'>
              <section className='TitleContent'>
                <h1>Navegantes da Vida</h1>
                <h2> Max Willecke</h2>
                <span>Tom: AM</span>
              </section>
              <div id='Chord' style={{fontSize : `${fontSized}rem`}}>
              <Modal
              ChordNoteId={chordId}
              update={transposedChord ? transposedChord : FormatedChord}
              tom={key}
              /> 
                {
                    !transposedChord ? <div dangerouslySetInnerHTML={{ __html: FormatedChord}} className='animation' /> :
                    <>
                    <div dangerouslySetInnerHTML={{ __html: transposedChord}}
                    className='animation'
                    />
                    </>
                }
              </div>
           </ChordL>
            <About className='animation_slide_left'>
              <iframe width="100%" height="215" src="https://www.youtube.com/embed/-h4X0FAoWRg" title="Navegantes da Vida - Max Willecke" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div>
                <h3>
                Sobre a Música
                </h3>
                <p>
                Navegantes da Vida é uma música utilizada em reuniões devocionais, conferências, encontro de amigos, celebrações de Dias Sagrados, ela é envolvente e harmoniosa. Se tornou um hino para a comunidade que se conecta em sua letra em busca do serviço ao próximo, através do amor, respeito e bondade.
                </p>
                <p>
                artist: Max Willecke <br/>
                composer: Max Willecke
                </p>
              </div>

              <div className='Chords'>
                <h3>Acordes</h3>
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
              
          
              </div>
            </About>

       </Container>
    </>
  )
}

export default App
