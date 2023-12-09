import styled from "styled-components"

export const Container = styled.div`

    width: 7rem;
    height: max-content;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    z-index: 88;
    padding: .4rem;
    border-radius: 1.6rem;
      /*margin-left: -3rem;*/
      margin-top: -2rem;
    background-color: var(--background-color-theme);
    backdrop-filter: blur(30px);
    border: 1px solid var(--border-color);
    transition:  opacity 150ms  ease-in-out;
    box-shadow: 0px 8px 13px #00000017;
    transform: translate(-50%);

 span{
    font-size: 1.2rem;
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