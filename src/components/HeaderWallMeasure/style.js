import styled, { css }  from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        display: flex;
        justify-content: center;
        align-items: flex-start;
        `};
        
        @media(max-width: 900px) { 
            width: 90%;       
        }  
      
        @media(max-width: 650px) { 
            font-size: 12px;     
        }  

        @media(max-width: 560px) { 
            font-size: 11px;     
        } 

        @media(max-width: 480px) { 
            font-size: 10px; 
        } 

        @media(max-width: 400px) { 
            font-size: 9px; 
        } 

        @media(max-width: 350px) { 
            font-size: 8px; 
        } 

    
        `
        export const H3 = styled.h3`
            width: 100%;
            height: 30px;
            color: #454355;   
            font-size: 15px;
            font-family: Arial, Helvetica, sans-serif;   
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 16px;
 
            
            @media(max-width: 900px) { 
                width: 90%;       
            }  

            @media(max-width: 650px) { 
                font-size: 13.5px;              
            }  

            @media(max-width: 560px) { 
                font-size: 11px; 
                   
            } 

            @media(max-width: 480px) { 
                font-size: 9px;             
            } 

            @media(max-width: 400px) { 
                font-size: 8px; 
            } 

            @media(max-width: 350px) { 
                font-size: 7px; 
            } 
     
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


    @media(max-width: 900px) { 
        width: 90%;       
    }  
    
    @media(max-width: 650px) { 
        font-size: 13.5px; 
    }  
    
    @media(max-width: 560px) { 
        font-size: 11px; 
    } 

    @media(max-width: 480px) { 
        font-size: 9px; 
    } 

    @media(max-width: 400px) { 
        font-size: 8px; 
    } 

    @media(max-width: 350px) { 
        font-size: 7px; 
    }
`  
   
    