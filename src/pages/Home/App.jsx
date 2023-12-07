
import './App.css'
import './animations.css'
import ChordSheetJS from 'chordsheetjs';
import Header from '../../components/comments/header';
import { About, Container,ChordL, SongChord, Navigation, ShareContent, Loading} from './style';
import {LuMusic,LuMusic2, LuChevronRight, LuShare, LuFacebook, LuYoutube, LuTwitter, LuInstagram} from 'react-icons/lu'
import img from '../../assets/thumb.webp'
import {useEffect, useState } from 'react';
import Logo from '../../assets/logo-v3.svg'
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
  const [isLoaded,setIsLoaded] = useState()
  const [key,setKey] = useState()
  const [cont,setCont] = useState(0)
  const [fontSized,setFontSized] = useState(1)
  const [transposedChord,setTransposedChord] = useState()
  const [FormatedChord,setFormatedChord] = useState()

  const chordSheet = (`
{meta: key Am}
{key: Am}

{comment: Intro (x2) }
[Am] [|][Fdim] [|] [Am][|] [Fdim]

{comment: 1° Verso }
[Am]Caminhar [Fdim]passo a passo a [Am]te encontrar, [Fdim]solto ao vento eu [C]cruzo o mar
[B°]Navegante da [Am]vida, e é tão [FM7]bom
[Am]Conhecer [Fdim]nos Teus olhos o [Am]meu irmão, [Fdim]dar-te a força das [C]minhas mãos
[B°]Dar-te o riso que [Am]vibra dentro em [FM7]mim

{comment: Refrão }
[C]É tão bom, [B°]sermos ecos da [Am]mesma voz, [G]sermos raios da [F]mesma luz
[G7]Sermos filhos do a[C]mor [E7]
[C]É tão bom, [B°]tu e eu nos tor[Am]nando nós, [G]pela força que [F]vem de Deus, [G7]nos tomamos só [Am]um

{comment: 2° Verso }
[Am]Te abraçar, [Fdim]com a força do [Am]meu amor, [Fdim]ser alívio pra [C]tua dor
[B°]Te curar as fe[Am]ridas e é tão [FM7]bom
[Am]Te levar [Fdim]e ir também ao mes[Am]mo lugar, [Fdim]onde todos vão [C]encontrar
[B°]Da semente o [Am]fruto em cada [FM7]um

{comment: Refrão }
[C]É tão bom, [B°]sermos ecos da [Am]mesma voz, [G]sermos raios da [F]mesma luz
[G7]Sermos filhos do a[C]mo[E7]r
[C]É tão bom, [B°]tu e eu nos tor[Am]nando nós, [G]pela força que [F]vem de Deus, [G7]nos tomamos só [Am]um 
  `.substring(1))
  
  const chordSheet2=(`
  {title: Ensinar}
{artist: Djamile Carreiro}
{composer: Djamile Carreiro}
{Key: C}
{comment: Intro (x2) }
[F][|][C][|][G][|][Am]

{comment: 1° Verso } 
[F]Vamos [C]sair [G]deste [Am]lugar
[F]Não faz sen[C]tido mais fi[G]car a[Am]ssim
[F]Sempre [C]buscar [G]um jeito [Am]de mudar
[F]É o ca[C]minho pra vi[G]tória no [Am]fim

{comment: Refrão }
Ensi[F]nar[C]    
le[G]var a men[Am]sagem 
De Ba[F]há'u'[C]lláh a toda [G]a humani[Am]dade 
E o [F]mun[C]do en[G]fim sabe[Am]rá 
Somos [F] todos uma só na[G]ção 
Flo[F]res de um só Jardim [G]
Vamos nos dar as mãos [F] [C]
[G] Ooh O[Am]oh 
 [F]Ooh O[C]oh 
[G] Ooh O[Am]oh 

{comment: 2° Verso } 
[F]Não [C]fique aí 
[G]Ouça seu cora[Am]ção 
[F]Pois a ver[C]dade está em [G]todo lu[Am]gar 
[F]Um mundo [C]de paz [G]não é pe[Am]dir demais 
[F]A uni[C]dade pode [G]tudo mu[Am]dar 

{comment: Refrão (2x) }
Ensi[F]nar[C]   
le[G]var a men[Am]sagem 
De Ba[F]há'u'[C]lláh a toda [G]a humani[Am]dade 
E o [F]mun[C]do en[G]fim sabe[Am]rá 
Somos [F]todos uma só na[G]ção 
Flo[F]res de um só Jardim [G]
Vamos nos dar as mãos [Fdim] [C]
[G] Ooh O[Am]oh 
[F]Ooh O[C]oh 
[G] Ooh O[C]oh 
`.substring(1))
  const chordSheet3=(`
{meta: key G}
{Key: G}

{comment: Intro }
[G][|][Bm][|][C][|][C][G/B][|][Am][|][D7]

{comment: 1° Verso (2x) }
[G]Liber[Bm]tai-vos deste [C]mundo [G/B] [Am]
E a [D7]cada e[G]tapa [Bm] [C][G/B] [Am]
alme[D7]jai a inexis[G]tência

{comment: 2°  verso }
Pois quan[Bm]do re[C]gressa ao sol [G/B] [Am]
O raio [D7]é oblite[G]rado [Bm] [C] [G/B] [Am]
O raio [D7]é oblite[G]rado
Quando [Bm]regressa ao [C]sol [G/B] [Am]
O raio [D7]é oblite[G]rado [Bm] [C] [G/B] [Am]
O raio [D7]é oblite[G]rado

{comment: 3° verso }
E quando a [Bm]gota [C]chega ao mar [G/B] [Am]
[D7]Desapa[G]rece [Bm] [C] [G/B] [Am]
[D7]Desapa[G]rece
Quando a [Bm]gota [C]chega ao mar [G/B] [Am]
[D7]Desapa[G]rece [Bm] [C] [G/B] [Am]
[D7]Desapa[G]rece 

{comment: Refrão (2x) }
[G7]E quem [C]ama [G/B] 
[Am]verda[D7]deira[G]mente [Em]
Rende a [Am]alma, rende a alma
Quando en[D7]contra o Bem-A[G]mado 

{comment: Outro }
O [D7]Bem-A[G]mado 
`.substring(1))

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

  
  if (cont){
   
    tranposedChard = setSong.transpose(cont)
    setKey(tranposedChard.key)

    const def = formatter.format(tranposedChard)
    const fixChord = def.replace(/dim/g,'°') 
    setTransposedChord(fixChord)
  }
  else if(!FormatedChord){
    const def = formatter.format(setSong)
    const fixChord = def.replace(/dim/g,'°') 
    setFormatedChord(fixChord)
    
  }
 

}
window.addEventListener('load',() =>{ 
  document.getElementById('LoadingScreen').style.display = 'none'
setIsLoaded(true)
})

//window.onload = () =>{document.querySelector('.animation_Loading').style.Display = 'none'}
  return (
    <>
    {isLoaded && <Loading id='LoadingScreen'>
      <img src={Logo} alt="" className='animation_Loading' />
    </Loading>
    }
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
            <button className='secondary'> <LuMusic2 strokeWidth={3}/>Baixar Cifra</button>
            <span className='line'></span>
            <button className='tomChange'> <span onClick={() => setCont(cont - 1)}>-</span> {key ? key : 'loading'} 
            <span onClick={() => setCont(cont +1)}>+</span></button>
            <button className='fontSize'> 

              <span onClick={()=>{setFontSized(fontSized >= 1.1 ? fontSized - 0.1: 1 )}}>A</span> 
              <p>tamanho</p> 
              <span onClick={()=>{setFontSized(fontSized <=1.5 ? fontSized + 0.1 : fontSized)}}>A</span>
            </button>


            <span className='line'></span>

            <ShareContent className='hide'>
            <button onClick={() => {}}><LuShare strokeWidth={3}/>compartilhar</button>
            <div className="hide">
               <span className='luFacebook'><LuFacebook/></span>
               <span className='LuYoutube'><LuYoutube/></span>
               <span className='LuTwitter'><LuTwitter/></span>
               <span className='LuInstagram'><LuInstagram/></span>
            </div>
            </ShareContent>
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
