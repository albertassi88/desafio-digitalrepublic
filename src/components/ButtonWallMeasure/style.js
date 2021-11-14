import styled, { css } from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 140px;
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
    margin-top: 260px;


    @media(max-width: 680px) { 
        width: 120px;
        height: 40px; 
        font-size: 13px;
    } 

    @media(max-width: 570px) { 
        width: 110px;
        height: 30px; 
        font-size: 12px;    
    } 

    @media(max-width: 480px) { 
        width: 90px;
        height: 30px; 
        font-size: 9px;  
    } 

    @media(max-width: 400px) { 
        width: 80px;
        height: 26px; 
        font-size: 8px;
    } 

    @media(max-width: 350px) { 
        width: 70px;
        height: 20px; 
        font-size: 7px;
    }

    ${(props) => props.colorPrimary &&
        css`            
            background-color: #969394; 
            color: white; 
            border: 2px solid #969394;                       
    `};

    ${props =>
        props.second &&
        css`            
            background-color: #FF4359; 
            color: white;                        
    `};

    ${(props) => props.colorSecond &&
        css`            
            background-color: #969394; 
            color: white; 
            border: 2px solid #969394;                       
    `};
`;