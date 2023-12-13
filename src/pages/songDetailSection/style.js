
import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-wrap: wrap;
gap: 1rem;
width: 100%;
max-width: 1300px;
padding-inline: clamp(1rem,2vw,2rem);

iframe{
    border-radius: 1rem;
}
flex-grow: 1;
align-content: flex-start;
@media (max-width: 1199px) {

    justify-content: center;
}
`

export const ChordL = styled.div`

flex:3 0 50%;
width: 100%;
max-width: 680px;
display: flex;
flex-direction: column;
gap: 2rem;
font-family: 'Sometype Mono', monospace;
h1{
    font-size: clamp(2rem,5vw,2rem);
}
h2{
    color:var(--color-primary);
    font-size: clamp(1rem,5vw,1.3rem);
    font-weight: 500;
}
p{
    span{
        font-weight: 600;
        color:var(--color-primary);
    }
}
.animation{
    animation: transition 104ms ease-in;

}
.chord-sheet{
  padding: 1rem;
  /*border-radius: 1rem;
  /*background-color: var(--color-theme-800);
 /* border: 1px solid var(--border-color);*/
  font-family: 'Sometype Mono', monospace;
}
.TitleContent{
  padding-inline:1rem;


}
@media (max-width: 1199px){
    flex-basis: 100%;
    max-width: 100%;
    .chord-sheet,.TitleContent{
        padding: 0;
    } 

} 
`

export const About = styled.aside`
flex: 2 0 22rem;
display: flex;
width: 100%;
max-width:22rem;
flex-direction: column;
position: relative;
gap: 1rem;
transition: all 380ms ease-out;

@media (prefers-color-scheme: light) {
  .ChordContent img{
      filter: invert(0);
  }

}
.HideButtonBar{
    display: none;
    justify-content: center;
    justify-self: center;

    > div {
        position: absolute;
        transform: translateY(-50%);
        padding: .6rem;

        div {
        
        cursor: pointer;
        opacity: .8;
        width:3rem;
        border-radius:10rem;
        height: 3px;
        background-color: var(--color-theme);
        }
    }

    
}


> div{
display: grid;
grid-auto-rows: max-content;
gap: 0.5rem;
border-radius: 1rem;
height: 100%;
max-height: 100%;
transition: max-height 140ms ease-in-out;
}


@media (max-width: 1199px){
    flex: 2 0 0;
    max-height: 70vh;
    max-width: 23rem;
    margin-inline: -1rem;
    display: flex;
    position: sticky;
    inset-inline: 0;
    bottom: 0;
    background: var(--color-theme-300);
    padding: 1rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border: 1px solid var(--border-color);
    justify-content: flex-end;

    .HideButtonBar{
    display: flex;
    }

    > div{
    overflow: auto;
    scroll-snap-type: y proximity;
    }

    &:has(>div.hide){
        gap: 0;
        max-width: 4rem;
        bottom: 1rem;
        border-radius: 2rem;
    }
    > div.hide{
        max-height: 0;
       
    }
    &:has(>div.hide) .HideButtonBar > div > div{
        width: 2rem;
    }
}


`
export const VideoPlayer = styled.div`

height: 12rem;
border-radius: 1rem;
overflow: hidden;
scroll-snap-align: start;
position: relative;

    > div{
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    transition: 140ms ease-out;
    &.hide{
        opacity: 0;
        pointer-events: none;
    }
 
    z-index: 1;
    align-items: center;
    justify-content: center;
    

    > span{
    z-index: 1;
    display: flex;
    padding: 1rem;
    background: var(--color-primary);
    color: white;
    border-radius: 100%;
    svg{
        fill: white;
    }
    }
    > img{
        position: absolute;
    inset:0;
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 0;
    }
    }

   


`

export const Navigation = styled.nav`
font-size: .8rem;
font-weight: 400;
opacity: 0.6;
flex: 1 0 100%;

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;

gap:.5rem;

}
li{
    display: flex;
    gap:.5rem;
}
li:not(:last-child)::after {
  display: inline-block;
  margin: 0 .25rem;
  content: '>';
}

a{
    font-weight: 400;
    color: var(--color-theme);
}
`

export const Loading = styled.div`
position: fixed;
z-index:9999;

width: 100%;
height: 100%;
inset: 0;
display: grid;
place-content: center;

background: var(--background-color-theme);

> img {
    width: 5rem;
}


`