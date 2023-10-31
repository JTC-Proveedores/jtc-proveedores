import React from "react";

const FourthFrame = ({}) => {
    let cards = [
        {title: 'PREDICTIVO', imageLink:'https://attachments-jtc.s3.amazonaws.com/analisis-preventivo.jpeg', description:['CAMARA TERMOGRAFICA', 'ANALIZADORES DE VIBRACION', 'ANALIZADOR DE GASES Y DE MOTOR', 'ESTROBOSCOPIO', 'CAMARAS ACUSTICAS INDUSTRIALES', 'MEDIDORES DE AISLAMIENTO']},
        {title: 'CONDUCCION DE FLUIDOS', imageLink: 'https://attachments-jtc.s3.amazonaws.com/valvulas.jpeg', description:['MANGUERAS INDUSTRIALES', 'CONEXIONES HIDRAULICAS', 'ACOPLES', 'VALVULAS']},
        {title: 'MAQUINARIA PESADA Y AGRICOLA', imageLink: 'https://attachments-jtc.s3.amazonaws.com/maquinaria.jpeg', description:['SISTEMA HIDRÁULICO', 'SISTEMA ELÉCTRICO', 'SISTEMA MOTOR', 'SISTEMA TRANSMISIÓN', 'LLANTAS', 'ACCESORIOS EN GENERAL']},
        {title: 'BOMBAS INDUSTRIALES', imageLink: 'https://attachments-jtc.s3.amazonaws.com/bombas-industriales.jpg', description:['BOMBAS CENTRÍFUGAS', 'BOMBAS TURBINA', 'BOMBAS SUMERGIBLES']},
        {title: 'FAJAS INDUSTRIALES', imageLink: 'https://attachments-jtc.s3.amazonaws.com/fajas-industriales.png', description:['FAJAS TRANSPORTADORAS','FAJAS MODULARES']},
        {title: 'SENSORES', imageLink: 'https://attachments-jtc.s3.amazonaws.com/sensores.png', description:['INDUCTIVOS', 'CAPACITIVOS', 'ÓPTICOS', 'FOTO-REFLECTIVOS', 'ULTRASÓNICOS', 'TEMPERATURA']},
        {title: 'MECANICA', imageLink: 'https://attachments-jtc.s3.amazonaws.com/repuestos.jpg', description:['REPUESTOS GENERAL', 'RODAMIENTOS', 'FAJAS', 'BOMBAS', 'FERRETERÍA']},
        {title: 'ELECTRONICA', imageLink: 'https://attachments-jtc.s3.amazonaws.com/variadores-velocidad.png', description:['SENSORES', 'TARJETAS ELECTRÓNICAS', 'SERVOMOTOR', 'SERVODRIVE', 'VARIADORES DE VELOCIDAD']},
        {title: 'LABORATORIO', imageLink: 'https://attachments-jtc.s3.amazonaws.com/termometro-industrial.png', description:['MANÓMETROS', 'TERMÓMETROS', 'EQUIPOS DE LABORATORIO', 'REFRACTÓMETROS', 'EQUIPOS DE INSTRUMENTACIÓN ANALÍTICA']},
        {title: 'CONSTRUCCION', imageLink: 'https://attachments-jtc.s3.amazonaws.com/material-construccion.jpg', description:['ARENA', 'CEMENTO', 'LADRILLOS', 'FIERRO DE CONSTRUCCIÓN', 'ARENA FINA', 'PINTURAS']},
        {title: 'OFICINA', imageLink: 'https://attachments-jtc.s3.amazonaws.com/oficinas.jpg', description:['ÚTILES DE OFICINA', 'MUEBLES', 'KITCHENING', 'EQUIPOS DE OFICINA']},
        {title: 'SEGURIDAD INDUSTRIAL', imageLink: 'https://attachments-jtc.s3.amazonaws.com/seguridad-industrial.jpg', description:['CALZADO INDUSTRIAL', 'CONFECCIÓN INDUSTRIAL', 'PROTECCIÓN DE CABEZA', 'PROTECCIÓN RESPIRATORIA', 'PROTECCIÓN AUDITIVA']},
    ]
    return(
        <div className='home-area-4'>
            <div className={'container'}>
                <div className={'title'}>¿Cómo podemos ayudarte?</div>

                <div className={'row mx-0'}>

                    {cards.map((c,key) => {
                        return(
                            <div className="col-12 col-md-6 col-lg-4 py-4 px-0 px-md-2 box-item">
                                <div className="flip-card">
                                    <div className="flip-card-front text-center" style={{backgroundImage: 'url("' + c.imageLink +'")'}}>
                                        <div className="inner color-white">
                                            <h3 className="flip-card-header">{c.title}</h3>
                                            <div className={'pt-4'}>
                                                <i className="fas fa-chevron-circle-right flip-card-chevron-icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flip-card-back text-center " style={{backgroundImage: 'url("' + c.imageLink +'")'}}>
                                        <div className="inner color-white bg-transparent-blue">
                                            {c.description.map((des) => {
                                                return(
                                                    <p>{des}</p>
                                                )
                                            }) }
                                            <button className="flip-card-button">Learn More</button>
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

export default FourthFrame
