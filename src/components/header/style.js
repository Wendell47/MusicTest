import styled from "styled-components"

export const Container = styled.header`

height: 6rem;
width: 100%;

display: flex;
justify-content: center;
border-bottom: 1px solid var(--border-color);
position: sticky;
z-index: 99;
top: 0;

background: var(--background-color-theme);
    //backdrop-filter: blur(38px);
   
> div{
    justify-content: space-between;
    gap:clamp(1.4rem,5vw,2rem);
    padding-inline: clamp(1rem,2vw,2rem);
    width: 100%;
    max-width: 1300px;
}
div{
    display: flex;
    align-items: center;
}

ul{
    all: unset;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    button{
        width: max-content;
    }
}

a{
   display:flex ;
   gap: clamp(.3rem,5vw,1rem);;
   color: var(--color-theme);
   align-items: center;
}
.logo{
    
    font-weight: 500;
}
.logo > span{
    font-size: clamp(1.3rem,5vw, 1.6rem);
}
.logo {
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
a img{
    width:clamp(2.2rem,12vw,3rem);
}
.menuBtn{
    width: max-content;
    display: none;
}

.line{
    height: 3rem;
    width:1px;
    background: var(--border-color);
}

@media (max-width:968px) {
    .line{
    height: 1px;
    width:5rem;
}
    .menuBtn{
    display: flex;
    font-size: 1.7rem;
    padding: .4rem;
}

    .menu ul{
opacity: 1;
transition: all 140ms ease-in;
position: absolute;
right: 0;
left: 0;
top: 0;
background: var(--color-theme-300);
padding: 1rem;
max-width: 100%;
margin: 1rem;

border: 1px solid var(--border-color);
margin-top: 7rem;
/* z-index: 99; */
flex-direction: column;
border-radius: 1rem;

height: max-content;


}


.hide{
    height: min-content;
    overflow: hidden;
    pointer-events: none;
    opacity: 0 !important;
}
}
` 
export const SearchBar = styled.div`
gap: .5rem;
background: var(--color-theme-800);
border: 1px solid var(--border-color);
border-radius: 2rem;
padding: .6rem 1rem;
flex:10 0;
input{
    all:unset;
    width: 100%;
}

svg{
    opacity: .8;
}
@media (max-width:968px) {
    flex: 4;
    font-size: 1.7rem;
    justify-content: flex-end;
    border: 0;
    background: transparent;
    padding:0;
    input{
        display: none;
    }

}
`
