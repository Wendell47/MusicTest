
import { Container } from './style';
import ChordNote from '../../../assets/chord1.svg'
import ChordNote2 from '../../../assets/chord2.svg'
import ChordNote3 from '../../../assets/chord3.svg'
import ChordC from '../../../assets/chord4.svg'
import ChordF0 from '../../../assets/chord5.svg'
import ChordFm7 from '../../../assets/chord6.svg'
import ChordG7 from '../../../assets/chord7.svg'
import ChordG from '../../../assets/chord8.svg'
import { useEffect } from 'react';
// eslint-disable-next-line react/prop-types
export default function Modal({update, tom}) {
  
  function handleChordHover(){
    const Modal = document.getElementById('Modal')
    const element = document.querySelectorAll('.chord')
    let itemClass
    let ImgClasse
    element.forEach(item => {
      item.addEventListener('mouseover', function() {
        
        itemClass = item.innerText
        
        Modal.querySelector('span').innerText = itemClass
        
        Modal.querySelector('button p').innerText = tom

        const Top = item.offsetTop - 160
        const margin = item.offsetWidth / 2
        const Left = item.offsetLeft + margin

        if(item.innerText){
          ImgClasse = Modal.querySelector(`.${itemClass}`)
          ImgClasse.classList.add('active')
        }

        if(itemClass){
          Modal.style.top = `${Top}px`
          Modal.style.left = `${Left}px`
          item.classList.add('hover')
          Modal.classList.remove('hide')
          
        }
      })
    })
    element.forEach(item => {
      
      item.addEventListener('mouseout', function() {
        item.classList.remove('hover')
        itemClass = item.innerText
        if(item.innerText){
          ImgClasse = Modal.querySelector(`.${itemClass}`)
          ImgClasse.classList.remove('active')
        }
        Modal.classList.add('hide')
      })
    })
  }
  
  useEffect(() => {
    handleChordHover()
  },[update])

  return (
    <Container  className='hide' id='Modal'>
       <span></span>
      <div className='ChordImages'>
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
      <button>Tom: <p>AM</p></button>
    </Container>
  )
}


