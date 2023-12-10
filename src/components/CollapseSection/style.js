import styled from "styled-components";

export const Container = styled.div`
*{
    transition: all 140ms ease-in-out;
}

display: flex;
flex-direction:column;
gap: 1rem;

max-height: 30rem;
overflow: auto;

padding: 1rem;
border-radius: 1rem;
background-color: var( --color-theme-300);
transition: all 118ms ease-out;
&.hideOnDesktop{
 display: none;
}

&.border{
    border: 1px solid var(--border-color);
    padding: 1.4rem;
}

font-family: 'Outfit', sans-serif;
&:has(.flexRow.hide){
    padding: 0.5rem;
    border-radius: 5rem;
    width: fit-content;
    margin-inline: auto;
}
 p{
    opacity: 0.8;
    font-weight: 300;
}

p + p{
    margin-top: 1rem;
}

p > span{
    font-weight: 500;
}
&.sticky{
position: sticky;
top: 7rem;
width:100%;
z-index: 1;
}

Section span{
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: .4rem;
  
  svg{
    font-size:1.3rem;
  }
}

section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    gap: .5rem;
    cursor: pointer;
   > svg{
    cursor:pointer;
    font-size:1.9rem;
    padding: .2rem;
    border-radius:5rem;
    background-color: var(--color-theme-800);
   }


   > svg:Hover{
    opacity:0.8;
   }
}

&:has(.hide) section > svg{
    opacity:0.8;
    rotate:180deg;
}

.flexRow{
    flex-wrap: nowrap !important;
    flex-direction:row;
}

.Content{
    scroll-margin: 2em;
    scroll-snap-align: start;
    height:100%;
    position: relative;
    max-height:max-content;
    overflow: auto;
    -webkit-mask-image: linear-gradient(0deg, rgba(255,255,255,0) 1%, rgba(250,250,250,1) 3%, rgba(255,255,255,1) 97%, rgba(255,255,255,0) 100%);
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap:.5rem;
    transition: height 140ms ease-out;

    > div {
        display: flex;
        flex-direction:column ;
        align-items: center;
        gap:.5rem;
        flex: 1;

    }

     img{
        width: 6rem;
        height: 7rem;
        filter: invert(1);
    }   
}

.Content.hide{
    height:0;
    display: none;
}



@media (max-width: 768px){
    scroll-snap-align: start;

    &.hideOnDesktop{
 display: flex;
}
}

 
@media (prefers-color-scheme: light) {
  .Content img{
      filter: invert(0);
  }

}

`