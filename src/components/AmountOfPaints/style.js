import styled from 'styled-components';

export const Div = styled.div`
    width: 800px;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #f3a6a1;
    z-index: 1;
    position: absolute;
    bottom: 0;    

    @media(max-width: 900px) {
        width: 600px; 
    }  
  
    @media(max-width: 750px) {
        width: 500px; 
    }  

    @media(max-width: 620px) { 
        width: 400px; 
        height: 450px;
    } 

    @media(max-width: 480px) { 
        width: 300px; 
        height: 350px;
    } 

    @media(max-width: 400px) { 
        width: 250px; 
        height: 320px;
    } 

    @media(max-width: 350px) { 
        width: 200px; 
        height: 300px;
    } 
`;

export const Span = styled.span`
    margin-top: 60px;
    font-size: 30px;
    color: #252525; 
    
    @media(max-width: 900px) {
        font-size: 25px;
    }  

    @media(max-width: 750px) {
        font-size: 20px;
    } 

    @media(max-width: 620px) { 
        font-size: 15px;
    } 

    @media(max-width: 480px) { 
        font-size: 10px;
    }

    @media(max-width: 350px) { 
        font-size: 8px;
    } 
`;

export const Button = styled.button`
    font-size: 30px;
    background-color: #f3a6a1;
    color: #252525;   
    border: none;
    position: absolute;
    right: 15px; 
    top: 15px; 

    @media(max-width: 750px) {
        font-size: 20px;
    } 

    @media(max-width: 480px) {
        font-size: 15px;
    }
    
    @media(max-width: 350px) {
        font-size: 10px;
    } 
`;