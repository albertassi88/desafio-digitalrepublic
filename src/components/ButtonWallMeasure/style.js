import styled, { css } from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    `;
    
    export const Button = styled.button`
        width: 160px;
        height: 50px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 700;
        font-family: Arial, Helvetica, sans-serif;
        color: #FF4359;
        border: 2px solid #FF4359;
        background-color: white;  
        margin-right: 10px;

    ${props =>
        props.second &&
        css`            
            background-color: #FF4359; 
            color: white;
                     
    `};
`;