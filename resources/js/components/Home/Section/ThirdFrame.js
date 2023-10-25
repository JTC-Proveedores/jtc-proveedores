import React from "react";

const ThirdFrame = ({}) => {
    let cards = [
        {text: 'Tenemos a la puntualidad como disciplina de cumplir a tiempo todos nuestros compromisos'},
        {text: 'Somos ágiles nos adaptamos a nuevas situaciones fácilmente'},
        {text: 'Somos una empresa integra y eficiente y muy innovadora'},
        {text: 'Amplia Gama de Productos y Servicios'},
        {text: 'Calidad y Confiabilidad'},
        {text: 'Experiencia y Conocimiento del Mercado, Ofrecemos un excelente servicio al cliente y soporte postventa'},
    ]

    return(
        <div className={'home-area-3'}>
            <div className={'container'}>
                <div className={'title'}>¿Por qué elegirnos?</div>
                <div className={'row mx-0'}>
                    {cards.map((data,key) => {
                        return(
                            <div className={'col-12 col-md-6 col-lg-4 py-4'}>
                                <div className={'custom-card custom-border'}>{data.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default ThirdFrame;
