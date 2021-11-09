import React from "react";
import { Div, H3, Span } from './style';

export default function HeaderWallMeasure() {
    return (       
        <Div>
            <Div primary>
                <h2>Qual a área de pintura?</h2>
            </Div>
            <H3>Informe abaixo os tamanhos (áreas) do local que você vai pintar:</H3>
            <Span>É necessário preencher os campos para calcular a área.</Span>
        </Div>        
    );
}