
import { Container } from './style';
import ChordNote from '../../assets/chord1.svg'
import ChordNote2 from '../../assets/chord2.svg'
import ChordNote3 from '../../assets/chord3.svg'
import ChordC from '../../assets/chord4.svg'
import ChordF0 from '../../assets/chord5.svg'
import ChordFm7 from '../../assets/chord6.svg'
import ChordG7 from '../../assets/chord7.svg'
import ChordG from '../../assets/chord8.svg'
import ChordDefault from '../../assets/chordDefault.svg'
import { useContext, useEffect } from 'react';
import { MeuContexto } from '../../context/Context';
// eslint-disable-next-line react/prop-types
export default function Modal() {
  const {key,updated} = useContext(MeuContexto)

  function handleChordHover(){
    const Modal = document.getElementById('Modal')
    const column = document.querySelectorAll('.column')
    let itemClass
    let ImgClasse
    

    column.forEach(item => {
      const element = item.querySelector('.chord')
      const lyrics = item.querySelector('.lyrics')
      
      if (lyrics.innerText === ''){
        const elementWidth = element.offsetWidth
      
        lyrics.style.width = `${elementWidth}px`
        lyrics.style.marginRight = '.2rem'
    }

      element.innerText != '' && element.addEventListener('mouseover', function() {
        itemClass = element.innerText
        
        Modal.querySelector('span').innerText = itemClass
        
       // Modal.querySelector('button p').innerText = key

        const marginTop = ('1') + element.offsetHeight -30
        console.log(marginTop)
        const Top = element.offsetTop - marginTop
        const margin = element.offsetWidth / 2
        console.log(element.offsetTop)
        const Left = element.offsetLeft + margin
        
        
        if(itemClass  | itemClass != '|'){
          try {
            const catchImg = Modal.querySelector(`.${itemClass}`)

            if(!catchImg){
              ImgClasse = Modal.querySelector('.ChordDefault')
             
              throw new Error('Nenhum elemento correspondente encontrado.')
              
            }else{
              ImgClasse = Modal.querySelector(`.${itemClass}`)
            }
          }catch (erro){
            console.error(erro.message)
          }
          ImgClasse.classList.add('active')
      }
        
        if(itemClass | itemClass != '|'){
          Modal.style.top = `${Top}px`
          Modal.style.left = `${Left}px`
          element.classList.add('hover')
          Modal.classList.remove('hide')
        }
      })
    })
    column.forEach(item => {
      const element = item.querySelector('.chord')
      item.addEventListener('mouseout', function() {
        element.classList.remove('hover')
        Modal.classList.add('hide')
        if(ImgClasse){
          ImgClasse.classList.remove('active')
        }
      })
    })
  }
  
  useEffect(() => {
    handleChordHover()
  },[updated])

  return (
    <Container  className='hide' id='Modal'>
       <span></span>
      <div className='ChordImages'>
      <img src={ChordDefault} className='ChordDefault' loading='lazy'/>
      <img src={ChordNote} className='Am' loading='lazy'/>
      <img src={ChordNote2} className='B°' loading='lazy'/>
      <img src={ChordNote3} className='E7'  loading='lazy'/>
      <img src={ChordF0} className='F°'  loading='lazy'/>
      <img src={ChordNote3} className='F'  loading='lazy'/>
      <img src={ChordC} className='C'  loading='lazy'/>
      <img src={ChordFm7} className='Fma7'  loading='lazy'/>
      <img src={ChordG7} className='G7'  loading='lazy'/>
      <img src={ChordG} className='G'  loading='lazy'/>
      </div>
      <button>Tom: <p>{key}</p></button>
    </Container>
  )
}


