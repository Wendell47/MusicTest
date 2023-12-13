import styled from "styled-components"

export const SongChord = styled.aside`

flex: 1 0 12rem;
    width: 100%;
    max-width: 12rem;
display: flex;
flex-direction: column;
gap:.5rem;
scroll-snap-align: start;

&.showOnMobile{
    display: none;
}

font-size: .8rem;

div{
    display:flex;
    flex-direction: column;
    gap: .5rem;
}
.line{
    width: 100%;
    height: 3px;
    /*background-color: var(--border-color);*/
}
 .tomChange, .fontsize {
    justify-content: space-between;
}


@media (max-width: 1199px){
    max-width: 100%;
    scroll-snap-type:y proximity;

   .sticky{
    flex-direction: row;
    flex-wrap: wrap;

     div{
        flex:1;
     }
   }
   .sticky > button{
    flex: 1 0 45%;
    }

    &.hideMobile{
    display: none;
    }

    &.showOnMobile{
    display: block;
}

img{
    display: none;
}

}

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