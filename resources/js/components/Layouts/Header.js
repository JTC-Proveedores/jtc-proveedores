import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route, NavLink} from "react-router-dom";
import Logo from '../../../../public/img/Logo-alternative.png';

//Pages
const Inicio = () => {
    return (
        <div>
            <h1>Inicio</h1>
        </div>
    );
};

const Nosotros = () => {
    return (
        <div>
            <h1>Nosotros</h1>
        </div>
    );
};
const Categorias = () => {
    return (
        <div>
            <h1>Categorias</h1>
        </div>
    );
};
const Contacto = () => {
    return (
        <div>
            <h1>Contacto</h1>
        </div>
    );
};


function NavBar() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    function openLink(e, link){
        window.location.href = link;
    }

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    return (
        <div>
            <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact className="nav-logo">
                        <img src={Logo} className={'custom-logo'}/>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                //activeClassName="active"
                                className={'nav-links'}
                                onClick={(e)=> openLink(e, '/')}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/nosotros"
                                //activeClassName="active"
                                className={'nav-links' }
                                onClick={(e)=> openLink(e, '/nosotros')}
                            >
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/categorias"
                                //activeClassName="active"
                                className={'nav-links'}
                                onClick={(e)=> openLink(e, '/categorias')}
                            >
                                Categorias
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contacto"
                                //activeClassName="active"
                                className={'nav-links' }
                                onClick={(e)=> openLink(e, '/contacto')}
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
}
const Header = ({url}) => {
    return (
        <>
            <BrowserRouter>
                <NavBar />

                <div className="pages">
                    <Routes>
                        <Route exact component={Inicio} />
                        <Route component={Nosotros} />
                        <Route component={Categorias} />
                        <Route component={Contacto} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

//ReactDOM.render(<Header />, document.getElementById('header'));


export default Header;

const element = document.getElementById('header');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Header {...props} />, element);
}
