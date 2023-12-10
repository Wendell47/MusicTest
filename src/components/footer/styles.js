import styled from "styled-components";

export const Container = styled.footer`
display: flex;
width: 100%;
justify-content: center;
 
border-top: 1px solid var(--border-color);
background: var(--color-theme-300);
padding:1rem;

.container{
    max-width: 1300px;
    display: flex;
    gap: 1rem;
    width:100%;
    align-items: center;
    flex-direction: column;

    font-size: 0.9rem;
    div, a{

        align-items: center;
        display: flex;
        color: var(--color-theme);
        font-weight: 400;
    }

    > div{
        width: inherit;
        justify-content: space-between;

    }
    @media (max-width: 768px){
    > div{
        flex-direction: column;

    }
}
    .social{
        gap: .8rem;
        a{
            border-radius:10rem;
            padding: 0.7rem;
            font-size: 1.4rem;
            display: flex;
            background-color: var(--color-theme-800);
        }
    }
}

ul{
    list-style: none;
}
div{
    display: flex;
    gap: 1rem;
}


`