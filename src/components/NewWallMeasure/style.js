import styled, { css }  from 'styled-components';

export const DivOption = styled.div`
    width: 180px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    ${props =>
        props.primary &&
        css`
            width: 90px;
    `};
`;

export const Span = styled.span`
    color: #454355;
    font-size: 15px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;

    ${props =>
        props.primary &&
        css`            
            font-size: 19px; 
            position: absolute;
            left: 0;
            top: 0;           
    `};
`;

export const Label = styled.label`
    color: #454355;
    font-size: 15px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Input = styled.input`
    font-size: 14px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    height: 25px;
    width: 90px;
    border: 1px solid #FF4359;
    background-color: white;
`;

export const Select = styled.select`
    font-size: 14px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    height: 30px;
    border: 1px solid #FF4359;
    background-color: white;
    color: #454355;
`;

export const Button = styled.button`
    font-size: 14px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    width: 75px;
    height: 30px;
    background-color: #FF4359;
    color: white;
    border-radius: 5px;
    margin-top: 20px
`;


