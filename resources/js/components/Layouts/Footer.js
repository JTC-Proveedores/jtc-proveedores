import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {useMediaQuery} from "react-responsive";
import moment from "moment";
import Logo from '../../../../public/img/Logo-alternative.png';

const Footer = ({url}) => {


    let contactLinks = [
        {icon: 'fab fa-whatsapp', content: '+51 912 345 678', link: 'https://api.whatsapp.com/send?phone=51912345678'},
        {icon: 'fa-regular fa-envelope', content: 'cotizaciones@jtcproveedores.com', link: 'https://api.whatsapp.com/send?phone=51912345678'},
    ]

    let socialMediaLinks = [
        {icon: 'fab fa-facebook-square', content:'', link: 'https://api.whatsapp.com/send?phone=51912345678'},
        {icon: 'fas fa-map-marked-alt', content:'', link: 'https://api.whatsapp.com/send?phone=51912345678'},
        {icon: 'fab fa-instagram', content:'', link: 'https://api.whatsapp.com/send?phone=51912345678'},
    ]

    const year = moment().format('YYYY');

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' });
    return(
        <div className={'custom-footer'}>
            <div className={'row mx-0'}>

                <div className={'col-12 px-0 py-4'}>
                    <div className={'container'}>
                        <div className={'row mx-0'}>
                            <div className={'col-12 col-md-3'}>
                                <div className={'se-bg'}>
                                    <img src={Logo} className={'se-logo'}/>
                                </div>
                            </div>

                            <div className={'col-12 col-md-5'}>
                                <div className={'footer-title'}>
                                    Contacto
                                </div>

                                <ul className={'list-unstyled footer-list my-3'}>
                                    {contactLinks.map((cL,key) => {
                                        return(
                                            <li className="pt-2">
                                                <a className="nav-link-footer" href={cL.link} target="_blank">
                                                    <i className={cL.icon}></i> {cL.content}
                                                </a>
                                            </li>
                                        )
                                    } )}
                                </ul>
                            </div>

                            <div className={'col-12 col-md-4'}>
                                <div className={'footer-title'}>
                                    Buscanos en
                                </div>

                                <div className={'my-3 row'}>
                                    {socialMediaLinks.map((sml, key) => {
                                        return(
                                            <div className={'col-12 col-md-auto'}>
                                                <a className="footer-link-icon" href={sml.link} target="_blank">
                                                    <i className={sml.icon}></i>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 px-0 pt-2">
                    <div className={'container'}>
                        <div className={'row mx-0'}>
                            <div className={'col-12'}>
                                <div className="mb-0 footer-title-text text-center">
                                    &copy; { year + ' JTC Proveedor Industrial || Developed by'} <b>inerfil.site</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const element = document.getElementById('footer');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Footer {...props} />, element);
}
