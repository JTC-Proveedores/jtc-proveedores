import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {getWindowSize} from "../Functions/General";

const Contacto = ({}) =>{

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(1);
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let height = windowSize.innerHeight - 80;

    let url = window.location;

    function save(e){
        console.log('Bang my head against the wall')
    }

    let content = [
        {icon: 'fas fa-map-marker-alt', title: 'Ubicación', list: ['Avenida prolongación Javier Prado este 8117 - Ate',]},
        {icon: 'fas fa-mobile-alt', title: 'Call center', list: ['+51 900 169 121',]},
        {icon: 'fas fa-envelope-open-text', title: 'E-mail', list: ['cotizaciones@jtcproveedores.com',]},
    ];

    return(
        <section className={'contact-sect'} style={{minHeight: (height + 'px')}}>

            <div className={'container py-4'}>

                <div className={'contact-map'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.982877344494!2d-76.93691932586385!3d-12.044698941860409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7bb00d4553f%3A0x813f335715c37413!2sJTC%20Proveedores!5e0!3m2!1ses-419!2spe!4v1699336725788!5m2!1ses-419!2spe"
                        width="100%"
                        height="250"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className={'pt-4'}>
                    <div className={'row justify-content-center contact-area'}>

                        <div className={'col-12 col-md-5'}>
                            <div className={'p-2 contactMedia'}>
                                <div className={'t1'}>CONTACTANOS</div>
                                <div className={'pt-2 t2'}>
                                    Tenemos enfoque en el servicio al cliente. Contamos con almacenes que garantizan entregas puntuales y un sólido soporte postventa a través de nuestros asesores comerciales altamente capacitados
                                </div>

                                <div className={''}>
                                    {content.map((c,key) => {
                                        return(
                                            <div className={'contentDiv'}>
                                                <div className={'row mx-0'}>
                                                    <div className={'col-2 text-center my-auto'}>
                                                        <i className={'icon ' + c.icon}></i>
                                                    </div>
                                                    <div className={'col-10'}>
                                                        <div className={'tcd1'}>{c.title}</div>
                                                        {c.list.map((l,key) => {
                                                            return(
                                                                <p className={'tcd2'}>{l}</p>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className={'col-12 col-md-7'}>
                            <form className={'formContact'}>

                                <div className="form-group py-2">
                                    <label className={'formLabel'}>Nombre(s) y Apellido(s)</label>
                                    <input type="text" className="form-control" placeholder="Ingresar nombre(s) y apellido(s)" name="names" value={names} onChange={(e) => setNames(e.target.value)}/>
                                </div>

                                <div className="form-group py-2">
                                    <label className={'formLabel'}>Correo de contacto</label>
                                    <input type="email" className="form-control" placeholder="Ingresar correo electrónico" name={'email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>

                                <div className="form-group py-2">
                                    <label className={'formLabel'}>Mensaje</label>
                                    <textarea className="form-control" rows="3" name={'message'} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>

                                <div className={'form-group py-2'}>
                                    <button type="button" className="btn btn-contact btn-lg btn-block" disabled={(names && email && message) ? false : false} onClick={(e) => save(e)}>
                                        Enviar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contacto;

if (document.getElementById('contacto')) {
    ReactDOM.render(<Contacto />, document.getElementById('contacto'));
}
