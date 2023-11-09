import React from "react";

const FourthFrame = ({}) => {
    let cards = [
        {icon: 'fas fa-industry', iconColor:'#B0C800', title: 'INDUSTRIA', imageLink:'https://attachments-jtc.s3.amazonaws.com/industrial-image.jpg', description:'Equipos, repuestos y consumibles de uso y aplicación industrial.'},
        {icon: 'fas fa-cogs', iconColor:'#ED8500', title: 'MANTENIMIENTO', imageLink: 'https://attachments-jtc.s3.amazonaws.com/mantenimiento-image.jpg', description:'Herramientas, accesorios y consumibles para el mantenimiento y seguridad.'},
       ];

    return(
        <div className='home-area-4'>
            <div className={'container'}>
                <div className={'title'}>¿Cómo podemos ayudarte?</div>

                <div className={'row mx-0 justify-content-around pt-5'}>

                    {cards.map((c,key) => {
                        return(
                            <div className="col-12 col-md-5 py-4 py-md-0 px-0 px-md-2 box-item mb-0">
                                <div className="slide-card" style={{backgroundImage: 'url("' + c.imageLink +'")'}}>
                                    <div className="sc-title-area">
                                        <div className="sc-title" style={{backgroundColor: c.iconColor}}>{c.title}</div>
                                    </div>
                                    <div className="sc-content-area">
                                        <div className={'px-2 py-1'}>
                                            <div className="sc-icon">
                                                <i className={c.icon} style={{color: c.iconColor}}></i>
                                            </div>

                                            <div className={'sc-description pt-2'}>
                                                <div>{c.description}</div>

                                                <div className={'pt-4 text-center'}>
                                                    <a className="btn sc-button" href={'https://api.whatsapp.com/send?phone=51900169121'}>Contactar</a>
                                                </div>
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

export default FourthFrame
