import styled, { css }  from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: 0;
    
    ${props =>
        props.primary &&
        css`
            width: 100%;
            height: 56px;
            background-color: #330c44;
            color: white;
            font-size: 15px;
            font-family: Arial, Helvetica, sans-serif;
            padding-left: 16px;
    `};
`
export const H3 = styled.h3`
    width: 100%;
    height: 30px;
    color: #454355;   
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;   
    padding-left: 16px; 
    display: flex;
    align-items: center;
`  

export const Span = styled.span`
    width: 100%;
    height: 45px;
    color: #454355;
    background-color: #FF4359;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 16px;
`  
   
    