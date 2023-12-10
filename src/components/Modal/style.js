import styled from "styled-components"
import Arrow from '../../assets/arrowModalCard.svg'
export const Container = styled.div`

    width: 7rem;
    height: max-content;
    position: absolute;
    --webkit-mask-image: url(${Arrow});
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    z-index: 88;
    padding: .4rem;
    border-radius: 1.6rem;
      /*margin-left: -3rem;*/
      margin-top: -2rem;
    background-color: var(--color-theme-300);
    backdrop-filter: blur(30px);
    transition:  opacity 150ms  ease-in-out;

    transform: translate(-50%,-50%);
  
    &::after{
      content: '';
      position: absolute;
      bottom:-10px;
      width: 1rem;
      height: 1rem;
      background-image: url(${Arrow});
      background-blend-mode: exclusion;
      --webkit-mask-image: url(${Arrow});
      --webkit-mask-position: bottom center;
     background-position:center;
     background-repeat: no-repeat;
    }
 span{
    font-size: 1.2rem;
    font-weight: 600;
    color:var(--color-primary);
  }
  &.hide{
    pointer-events: none;
    opacity: 0;
  }
  .ChordImages{
    position: relative;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
  }
 img{
    position: absolute;
    
    height: 100%;
    visibility: hidden;
    filter: invert(1);
    transition: visibility 140ms;
  }
  .active{
    visibility: visible;
  }
  button{
  width: 100%;
    justify-content:center;
  font-size: .9rem;
 }
  @media (prefers-color-scheme: light) {
    img{
        filter: invert(0);
    }

}
 
`