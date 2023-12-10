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
    gap: 1rem;

    button{
    background-color: rgb(0 0 0 / 10%);
    backdrop-filter: saturate(1.5);
    padding: 0.3rem 1rem;
    height: fit-content;
    }

    svg{
        font-size: 1.3rem;
    }

    }
`

export const Banner = styled.div`

overflow: hidden;
padding: 2rem;
height:clamp(20rem, 23vw, 23rem);
border-radius: 1rem;
position: relative;
background: var(--color-theme-800);
color: var(--color-theme);



>div{
    max-width: 30rem;
    height: -webkit-fill-available;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
h1{
    font-size: clamp(2rem, 5vw, 2.8rem);
}

p{
    
    opacity: 0.8;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    flex-grow: 1;
}
img{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
}

@media (max-width: 750px){
    height:max-content;

    img{
        display: none;
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
        font-size: 1.6rem;
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

    font-size: clamp(.6rem,3vw,1rem);
    }

}

.Tags{
    justify-content: space-between;
}
.sectionContent{
   display: flex;
   gap: 1rem;
   overflow-x: auto;
   scroll-snap-type: x proximity;
}

`

export const Card = styled.div`
scroll-snap-align:start;
flex: 1 0 50%;
padding: .7rem;
border-radius: 1rem;
border: 1px solid var(--border-color);
display: flex;
flex-direction: column;
gap: .8rem;

width: 100%;
max-width: clamp(10rem, 24vw, 18.5rem);
height: 100%;
max-height: 20rem;
background-color: var(--color-theme-800);

img{
width: 100%;
border-radius: .8rem;
}
h4{
font-size: clamp(1rem,3vw,1.2rem);
text-wrap: nowrap;
    overflow: auto;
    text-overflow: ellipsis;
}

p{
    opacity:0.8;
    font-size: clamp(.8rem,3vw,1rem);
}


`