import styled, { css } from "styled-components";

export const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    ${props =>
    props.second &&
        css`
        width: 800px;
        min-height: 600px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid #e1d6e2;   
        position: relative;
        
        @media(max-width: 900px) { 
            width: 100%;       
        }          
    `};
        
        ${props =>
    props.third &&
            css`
            width: 100%;
            height: 120px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            position: relative;
    `};
`;

export const Li = styled.li`
    list-style-type: none;
`;
