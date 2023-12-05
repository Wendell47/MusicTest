import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-wrap: wrap;
gap: 2rem;
width: 100%;
max-width: 1300px;
padding-inline: 2rem;
margin-top: 2rem;



iframe{
    border-radius: 1rem;
}
`

export const ChordL = styled.div`

flex:3 0 50%;
width: 100%;
max-width: 624px;

h2{
    color:var(--color-primary);
}
#Chord{
    margin-top: 2rem;
   
}

.animation{
    animation: transition 104ms ease-in;

}
`

export const About = styled.aside`
flex: 2 0 11rem;
display: flex;
flex-direction: column;
gap: 2rem;

p{
    opacity: 0.8;
    font-weight: 300;
}
div{
    padding: 2rem 1rem;
    border-radius: 1rem;
    background-color: var( --color-theme-800);
    border: 1px solid var(--border-color);

    p + p{
        margin-top: 1rem;
    }
    h3{
        margin-bottom: .2rem;
    }
}

`

export const SongChord = styled.aside`
flex: 1 0 10rem;
    width: 100%;
    max-width: 10rem;
display: flex;
flex-direction: column;
gap:.5rem;


img{
    width: 100%;
    border-radius: .5rem;
}
font-size: .8rem;

div{
    display:flex;
    flex-direction: column;
    gap: .5rem;
}
.line{
    width: 100%;
    height: 1px;
    background-color: var(--border-color);
}

@media (max-width: 765px){
    max-width: 100%;
}
`

export const Navigation = styled.nav`
display: flex;
gap: 1rem;

font-size: .8rem;
font-weight: 300;
opacity: 0.8;
flex: 1 0 100%;
`

