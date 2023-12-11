import styled from "styled-components";

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
    background-color:inherit;
    backdrop-filter: opacity(1) contrast(0.8);
    padding: 0.3rem 1rem;
    height: fit-content;
    font-weight: 400;

    font-size: .9rem;
    }

    svg{
        font-size: 1.3rem;
    }

    }
`

export const Banner = styled.div`

overflow: hidden;
padding: 2rem;
height:clamp(20rem, 26vw, 26rem);
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

gap: 1rem;

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

.Tags{
    justify-content: space-between;
}
.sectionContent{
   display: flex;
   padding-inline: 1rem;
   margin-inline: -1rem;
   gap: 1rem;
   overflow-x: auto;
   scroll-snap-type: x proximity;

}

`

export const Card = styled.div`
scroll-snap-align:center;

&:first-of-type{
    
    scroll-snap-align: end;
}

&.yellow{background-color: #FFF3CF;}
&.orange{background-color:#FFE5E0;}
&.purple{ background-color:#E2D6FF;}
&.pink{background-color:#FFE0E6;}
&.blue{background-color:#DEECFF;}

flex: 1 0 70%;
padding: .7rem;
border-radius: 1rem;
border: 1px solid var(--border-color);
display: flex;
flex-direction: column;
gap: .8rem;

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