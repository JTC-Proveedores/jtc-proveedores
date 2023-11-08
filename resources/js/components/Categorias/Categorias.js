import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {getWindowSize} from "../Functions/General";

const Categorias = ({}) =>{

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let width = windowSize.innerWidth;

    let categoryCards = [
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
    ];

    let url = window.location;


    return(
        <div className={'categorySect'}>
            <div className={'container '}>
                <div className={'title'}>
                    Nuestros servicios
                </div>

                <div className={'cat-area pt-4'}>
                    {categoryCards.map((c, key) => {

                        let backGroundStyle = {
                            backgroundImage: 'url("' + c.imageLink +'")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }

                        return(
                            <div className={'ca-card'} style={(width > 767) ? {} : backGroundStyle}>
                                <div className={'row mx-0'}>
                                    {(width > 767) &&
                                        <div className={'col-12 col-md-3 ca-bg-img'} style={backGroundStyle}>
                                        </div>
                                    }
                                    <div className={'col-12 col-md-9'} style={(width > 767) ? {} : {backgroundColor: '#0c629173'}}>
                                        <p className={'ca-title'}>{c.title}</p>
                                        <div className={'pt-2'}>
                                            {c.description.map((cd, key) => {
                                                return(
                                                    <p className={'ca-content'} style={(width > 767) ? {} : {color: 'white', fontWeight: '500'}}>{'- ' + cd}</p>
                                                )
                                            })}
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

export default Categorias;

if (document.getElementById('categorias')) {
    ReactDOM.render(<Categorias />, document.getElementById('categorias'));
}
