import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-wrap: wrap;
gap: 2rem;
width: 100%;
max-width: 1300px;
padding-inline: clamp(1rem,2vw,2rem);
margin-top: 2rem;
iframe{
    border-radius: 1rem;
}
`

export const ChordL = styled.div`

flex:3 0 50%;
width: 100%;
max-width: 624px;
display: flex;
flex-direction: column;
gap: 2rem;
h2{
    color:var(--color-primary);
}


.animation{
    animation: transition 104ms ease-in;

}


`

export const About = styled.aside`
flex: 2 0 17rem;
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

flex: 1 0 12rem;
    width: 100%;
    max-width: 12rem;
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
 .tomChange, .fontsize {
    justify-content: space-between;
}


@media (max-width: 765px){
    max-width: 100%;

   .sticky{
    flex-direction: row;
    flex-wrap: wrap;

     div{
        flex:1;
     }
   }
   button{
    flex: 1;
}

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

export const ShareContent = styled.div`



.hide{
    display: none;
}

> div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
padding: 1rem;
border-radius: 1rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: var(--color-theme-800);
border: 1px solid var(--border-color);
flex-direction: row !important;
gap:1rem;
}
> span{
    flex: 1 0 1rem;
    width: 3rem;
    display: flex;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
}



.luFacebook{
    background: #004efff5;
  
}
.LuYoutube{
    background: red;
   
}
.LuInstagram{
    background: #9a0bc5f5;
  
}
.LuTwitter{
    background: #008ffff5;
    
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