import styled from "styled-components";

export const Container = styled.div`

position: relative;
p{
    padding:.4rem;
    transition:140ms;
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .4rem;
    opacity: 0.8;
   
}
>p{
    background-color: var(--color-theme-300);
}
p:hover{
    opacity:1;
background-color: var(--color-theme-800);
}

p.active{
    opacity: 1;
    color: white;
    background-color: var(--color-primary);

}

>div{
    background-color: var(--background-color-theme);
    border:1px solid var(--border-color);
    position: absolute;
    top: 3rem;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: .2rem;
    border-radius: .4rem;
    gap: .3rem;
    p{
        padding: .2rem .7rem;
        width: 100%;
        border-radius: .3rem;
    
    }
}

> div.hide{
display: none;
}
`