import styled from 'styled-components';

export const Div = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;  
    bottom: 0;
`;

export const Span = styled.span`  
    width: 400px;
    height: 50px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    color: #252525;
    margin-bottom: 5px;  
    
    @media(max-width: 900px) {
        font-size: 25px;
        margin-bottom: 4px;  
        justify-content: center;
    }  
  
    @media(max-width: 750px) {
        font-size: 20px;
        justify-content: center;
    }  

    @media(max-width: 620px) { 
        font-size: 15px;
        justify-content: center;
    } 

    @media(max-width: 480px) { 
        font-size: 10px;
        justify-content: center;  
        margin-bottom: 0px;  
    } 

    @media(max-width: 400px) { 
        font-size: 9px;
        justify-content: center;  
        margin-bottom: 0px;        
    } 

    @media(max-width: 350px) { 
        font-size: 8px;
        justify-content: center;  
        margin-bottom: 0px;  
    } 
`;
