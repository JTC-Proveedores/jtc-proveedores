import React from "react";

const ThirdFrame = ({}) => {
    let cards = [
        {icon: 'fa-regular fa-clock', title:'Puntualidad', text: 'Tenemos a la puntualidad como disciplina de cumplir a tiempo todos nuestros compromisos'},
        {icon: 'fa-solid fa-users-gear', title: 'Adaptabilidad', text: 'Somos ágiles nos adaptamos a nuevas situaciones fácilmente'},
        {icon: 'fa-regular fa-handshake', title: 'Eficiencia', text: 'Somos una empresa integra y eficiente y muy innovadora'},
        {icon: 'fa-solid fa-cubes-stacked', title: 'Abastecimiento', text: 'Amplia Gama de Productos y Servicios'},
        {icon: 'fa-solid fa-check-double', title: 'Garantía', text: 'Calidad y Confiabilidad'},
        {icon: 'fa-solid fa-magnifying-glass-chart', title: 'Conocimiento   ', text: 'Experiencia y Conocimiento del Mercado, Ofrecemos un excelente servicio al cliente y soporte postventa'},
    ]

    return(
        <div className={'home-area-3'}>
            <div className={'container'}>
                <div className={'title'}>¿Por qué elegirnos?</div>
                <div className={'row mx-0'}>
                    {cards.map((data,key) => {
                        return(
                            <div className={'col-12 col-md-6 col-lg-4 py-4 px-0 px-md-2'}>

                                <div className="service">
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <i className={'flip-box-icon ' + data.icon}></i>
                                                <h2>{data.title}</h2>
                                            </div>
                                            <div className="flip-box-back">
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default ThirdFrame;
