import styled from "styled-components";

export const Container = styled.div`
flex-grow: 1;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
gap: 1rem;
width: 100%;
max-width: 1300px;

>div{
    gap: 1rem; 
}
>div:first-child{
    flex:1;
    display: flex;
    flex-wrap: wrap;
    
}
>div:last-child{
    flex:3;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(20rem, 1fr));
    grid-auto-rows: max-content;
   
}
`

