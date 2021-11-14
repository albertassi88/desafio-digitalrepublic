import styled, { css }  from "styled-components";

export const DivOption = styled.div`
    width: 180px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 180px;

    @media(max-width: 900px) { 
        width: 140px;    
    }  

    @media(max-width: 680px) { 
        width: 110px;    
    } 

    @media(max-width: 570px) { 
        width: 90px;    
    }
    
    @media(max-width: 480px) { 
        width: 80px;    
    } 

    @media(max-width: 400px) { 
        width: 70px;    
    } 

    @media(max-width: 350px) { 
        width: 60px;    
    }
    
    ${props =>
    props.primary &&
        css`
            width: 90px;
            
            @media(max-width: 900px) { 
                width: 70px;     
            } 
            
            @media(max-width: 680px) { 
                width: 60px;     
            } 

            @media(max-width: 570px) { 
                width: 50px;     
            } 

            @media(max-width: 480px) { 
                width: 40px;    
            } 

            @media(max-width: 400px) { 
                width: 35px;    
            } 

            @media(max-width: 350px) { 
                width: 30px;    
            } 
    `};
`;

export const Span = styled.span`
    color: #454355;
    font-size: 15px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;

    @media(max-width: 900px) { 
        font-size: 12px;
    }  

    @media(max-width: 680px) { 
        font-size: 11px;    
    } 

    @media(max-width: 570px) { 
        font-size: 10px;      
    } 

    @media(max-width: 480px) { 
        font-size: 9px;      
    }
    
    @media(max-width: 400px) { 
        font-size: 8px;      
    }

    @media(max-width: 350px) { 
        font-size: 6px;      
    }

    ${props =>
    props.primary &&
        css`            
            font-size: 19px; 
            position: absolute;
            left: 0;
            top: 0;  
            
            @media(max-width: 900px) { 
                font-size: 16px; 
                left: 30px;
            }

            @media(max-width: 680px) { 
                font-size: 15px;  
                left: 10px;  
            } 

            @media(max-width: 570px) { 
                font-size: 13px; 
            } 

            @media(max-width: 480px) { 
                font-size: 10px;      
            } 

            @media(max-width: 350px) { 
                font-size: 9px;      
            } 
          
    `};
`;

export const Label = styled.label`
    color: #454355;
    font-size: 15px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;

    @media(max-width: 900px) { 
        font-size: 12px;   
    }  

    @media(max-width: 680px) { 
        font-size: 11px;  
    } 

    @media(max-width: 570px) { 
        font-size: 10px;  
    } 

    @media(max-width: 480px) { 
        font-size: 9px;      
    } 

    @media(max-width: 400px) { 
        font-size: 8px;
    }
    
    @media(max-width: 350px) { 
        font-size: 6px;
    } 
`;

export const Input = styled.input`
    font-size: 14px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    height: 25px;
    width: 90px;
    border: 1px solid #FF4359;
    background-color: white;

    @media(max-width: 900px) { 
        font-size: 12px;   
    } 

    @media(max-width: 680px) { 
        font-size: 11px;  
    } 

    @media(max-width: 570px) { 
        font-size: 9px;  
        width: 70px;
    } 

    @media(max-width: 480px) { 
        font-size: 7px;  
        width: 55px;
        height: 20px;      
    } 

    @media(max-width: 400px) { 
        font-size: 6px;  
        width: 50px;
        height: 15px;      
    } 

    @media(max-width: 350px) { 
        font-size: 4px;  
        width: 40px;
        height: 13px; 
    } 
`;

export const Select = styled.select`
    font-size: 14px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    height: 30px;
    border: 1px solid #FF4359;
    background-color: white;
    color: #454355;

    @media(max-width: 680px) { 
        font-size: 12px;  
    } 

    @media(max-width: 570px) { 
        font-size: 10px;  
    } 

    @media(max-width: 480px) { 
        font-size: 8.5px;
        height: 20px;
    } 

    @media(max-width: 400px) { 
        font-size: 8px;
        width: 26px;    
        height: 15px;
    } 

    @media(max-width: 350px) { 
        font-size: 4px;  
        width: 20px;
        height: 13px;
        -webkit-appearance: none;
    } 
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
    margin-top: 20px;

    background-color: ${(props) => props.colorPrimary};

    @media(max-width: 900px) { 
        font-size: 13px;
        width: 65px;
        height: 28px;  
    } 

    @media(max-width: 680px) { 
        font-size: 12px;  
        width: 60px;
        height: 25px;  
    } 

    @media(max-width: 480px) { 
        font-size: 10px;  
        width: 50px;
        height: 20px; 
        margin-top: 10px;
    } 

    @media(max-width: 400px) { 
        font-size: 8.5px;  
        width: 40px;
        height: 15px; 
    } 

    @media(max-width: 350px) { 
        font-size: 7px;  
        width: 35px;
        height: 10px; 
    }  
`;


