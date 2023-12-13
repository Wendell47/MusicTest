import styled from "styled-components";
import Mask from '../../assets/Mask1.svg'
export const Container = styled.div`

width: 100%;
padding-inline: 1rem;
max-width: 1300px;
flex-grow: 1;
display: flex;
flex-direction: column;

gap: 3rem;


.Tags{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;
    
    button{
    //background-color:inherit;
   // backdrop-filter: opacity(1) contrast(0.8);
    padding: 0.3rem 1rem;
    height: fit-content;
    font-weight: 500;  
    font-size: .9rem;
    }

    svg{
        font-size: 1.3rem;
    }

    }

    @media (max-width:1199x){
        justify-content: center;
    }
`

export const Banner = styled.div`

overflow: hidden;
padding: 2rem;
height:clamp(20rem, 26vw, 23rem);
border-radius: 1rem;
position: relative;
background: var(--color-theme-800);
color: var(--color-theme);
z-index: 1;


>div{
    max-width: 30rem;
    height: -webkit-fill-available;
    
    flex-direction: column;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
h1{
    font-size: clamp(2rem, 5vw, 2.4em);
    span{
        color: var(--color-primary);
    }
}

p{
    
    opacity: 0.8;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    flex-grow: 1;
}
img{
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    height: 100%;
}

@media (max-width: 950px){
    height:max-content;

    img{
        height: 100%;
    width: clamp(5rem,27vw,18rem);
    object-fit: cover;
    object-position: left;

    }
}
`

export const Section = styled.div`
display: flex;
flex-direction: column;

gap: 1.6rem;

section{
    
    display: flex;
    justify-content: space-between;
   

    h3{
        font-size: clamp(1.3rem, 4vw,1.6rem);
        line-height: 100%;
    }

    span{
        opacity: 0.8;
    }
    a {
        display: flex;
        align-items: center;
        gap: .5rem;

        text-overflow: ellipsis;
    overflow: auto;
    text-wrap: nowrap;

    font-size: clamp(.9rem,3vw,1rem);
    }

}
.flexWrap{
    flex-wrap: wrap;
}

.Tags{
    justify-content: space-between;
}
.sectionContent{
    scroll-behavior: smooth;
   display: flex;
   gap: 1rem;
   overflow-x: auto;
   scroll-snap-type: x proximity;
    border-radius: 1rem;
}

@media (max-width: 768px){
    .sectionContent{
    border-radius: 0;
    padding-inline: 1rem;
     margin-inline: -1rem;
    }
}

`

export const PrevButton = styled.div`
display: flex;
gap: .7rem;
font-size:2rem;

> svg{
    cursor: pointer;
border-radius: 100%;
display: flex;
padding: .3rem;
background-color: var(--color-theme-300);
}

`
export const Card = styled.div`
cursor: pointer;
scroll-snap-align:center;

&:first-of-type{
    
    scroll-snap-align: end;
}

&.yellow{
    color: hsl(45 27% 23% / 1);
background-color: hsl(45, 100%, 91%);
}

&.yellow .Tags button{
    color: hsl(45 27% 23% / 1);
    background-color: hsl(45 86% 86% / 1);
}
&.orange{background-color:#FFE5E0;
    color: hsl(10, 27%, 23%);
}
&.orange .Tags button{
    color: hsl(10, 27%, 23%);
    background-color:hsl(10, 86%, 86%);
}
&.purple{ background-color:#E2D6FF;
    color: hsl(10, 27%, 23%);
}
&.purple .Tags button{
    color: hsl(10, 27%, 23%);
    background-color:hsl(10, 86%, 86%);
}
&.pink{background-color:#FFE0E6;
    color: hsl(348, 27%, 23%);
}
&.pink .Tags button{
    color: hsl(348, 27%, 23%);
    background-color:hsl(348, 86%, 86%);
}
&.blue{background-color:#DEECFF;
    color: hsl(215, 27%, 23%);
}
&.blue .Tags button{
    color: hsl(215, 27%, 23%);
    background-color:hsl(215, 86%, 86%);
}

flex: 1 0 70%;
padding: .7rem;
min-height: 17.5rem;
border-radius: 1rem;
border: 1px solid var(--border-color);
display: flex;
flex-direction: column;
gap: .8rem;

>div:nth-child(2){
    flex-grow: 1;
}
width: 100%;
max-width: clamp(15rem, 24vw, 19rem);
height: 100%;
max-height: 20rem;


img{
width: 100%;
border-radius: .8rem;
}
h4{
font-size: clamp(1.1rem,3vw,1.2rem);
text-wrap: nowrap;
    overflow: auto;
    text-overflow: ellipsis;
}

p{
    opacity:0.8;
    font-size: clamp(.9rem,3vw,1rem);
}

@media (prefers-color-scheme: dark) {
    background-color: var(--color-theme-800) !important;
}
@media (max-width: 765x){

}

`

export const Card2 = styled.div`
cursor: pointer;
flex: 1 0 100%;
width: 100%;
max-width: clamp(20rem,26vw,25.7rem);

scroll-snap-align: center;

&:first-of-type{
    scroll-snap-align: end;
}
display: flex;
overflow: hidden;
border-radius: 1rem;
background-color: var(--color-theme-300);

> div:first-of-type{
    -webkit-mask-image: url(${Mask});
   -webkit-mask-repeat: no-repeat;
   mask-size: cover;
   -webkit-mask-size:cover; 
}
img{
    flex: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
  
}

> div:last-of-type{
    padding:1rem;
    width: 30%;
    display:flex;
    flex-direction: column;
    gap: .7rem;
    align-items: flex-end;
    text-align: end;
    span{
        flex-grow: 1;
    }
}


`

export const Card3 = styled.div`
    flex: 1 0 21rem;
    width: 100%;
    max-width: max(14vw,19rem);

@media (max-width:780px){
    max-width: 100%;
}
cursor: pointer;
display: flex;
gap: .5rem;
padding: .6rem;
border-radius: 1rem;

img{
    border-radius: .8rem;
    width: 6rem;
    height: 6rem;
    object-fit: cover;
}
background-color: var(--color-theme-300);
&:hover{
    background-color: var(--color-theme-800);

}

> div{
    display: flex;
    flex-direction: column;
    width: 100%;
    p{
        font-size: .8rem;
        opacity: 0.7;
        flex-grow: 1;
    }
}
`