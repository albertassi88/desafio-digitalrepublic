import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -140px;
`;
    
export const Span = styled.span` 
    color: red;
    font-size: 16px;
    font-weight: bold;

    @media(max-width: 1500px) { 
        font-size: 12px;   
    } 

    @media(max-width: 650px) { 
        font-size: 10px;  
    }
    
    @media(max-width: 480px) { 
        font-size: 8px; 
    } 

    @media(max-width: 400px) { 
        font-size: 7px; 
    } 

    @media(max-width: 350px) { 
        font-size: 6px; 
    }
`;

    