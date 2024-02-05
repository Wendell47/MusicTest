import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
   // max-width: max(14vw,19rem);

@media (max-width:780px){
    max-width: 100%;
}
cursor: pointer;
display: flex;
gap: .5rem;
padding: .6rem;
border-radius: 1rem;


>span{
    font-weight: bold;
    align-self: center;
    padding-inline: 1rem;
    opacity: 0.8;
}
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