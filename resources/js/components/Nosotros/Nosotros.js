import React from "react";
import ReactDOM from "react-dom";

const Nosotros = ({}) =>{

    let mvCards = [
        {title: 'Misión', icon:'fas fa-compass', content:'Ser un socio estratégico de confianza para nuestros clientes en la gestión de sus cadenas de suministro industriales. Nos comprometemos a ofrecer productos de calidad, entregas a tiempo y asesoramiento post venta para impulsar el éxito de nuestros clientes y contribuir al crecimiento sostenible de sus operaciones.'},
        {title: 'Visión', icon:'fas fa-eye', content:'Convertirnos en la empresa lider de soluciones de cadena de suministro para la industria.Innovando continuamente en nuestros servicios y productos para satisfacer las necesidades cambiantes de nuestros clientes. Buscamos ser reconocidos por nuestra excelencia en el servicio al cliente, nuestro compromiso con la calidad y nuestro impacto positivo en la comunidad y el medio ambiente'},
    ];

    let pfCards = [
        'En nuestra organización, la puntualidad es un pilar central que nos impulsa a honrar todos nuestros compromisos en el tiempo acordado.',
        'Somos capaces de adaptarnos rápidamente a nuevas situaciones gracias a nuestra agilidad.',
        'Innovación, eficiencia e integridad son los pilares de nuestra empresa.',
        'Contamos con una amplia diversidad de productos y servicios, desde soluciones tecnológicas hasta requerimientos muy especificos, todo ello con el objetivo de atender a las distintas demandas de nuestros clientes.',
        'Garantía de Calidad y Fiabilidad.',
        'Nuestra amplia experiencia y profundo entendimiento del mercado se traducen en la entrega de un servicio al cliente excepcional, respaldado por un sólido soporte postventa.',
    ];

    let url = window.location;

    return(
        <div className={'nosotros-sect'}>
            <div className={'sub-image'}>
            </div>

            <div className={'wwr-sect'}>
                <div className={'container custom-cont'}>
                    <div className={'sect'}>
                        <div className={'tittle'}>
                            ¿Quiénes Somos?
                        </div>
                        <div className={'content'}>
                            Somos JTC proveedores Industriales, una empresa especializada en la gestión de
                            cadenas de suministro. Proveemos productos de marcas globales de uso industrial.
                            Tenemos enfoque en el servicio al cliente. Contamos con almacenes que garantizan
                            entregas puntuales y un sólido soporte postventa a través de nuestros asesores
                            comerciales altamente capacitados. Nuestra ventaja competitiva radica en nuestra
                            profunda comprensión y experiencia en los mercados nacionales e internacionales,
                            lo que nos permite ofrecer un nivel de servicio excepcional y fortalecer relaciones
                            sólidas con nuestros clientes.
                        </div>
                        <div className={'pt-4'}>
                            <a className={'btn btn-lg btn-jtc w-100'} href={'https://api.whatsapp.com/send?phone=51900169121'} target={'_blank'}>
                                Contactar
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'mv-section'}>
                <div className={'mission-vission container'}>
                    <div className={'row'}>
                        {mvCards.map((m,key) => {
                            return(
                                <div className={'col-12 col-md-6 mv-card'}>
                                    <div className={'mv-title'}>
                                        <i className={m.icon}></i> {m.title}
                                    </div>
                                    <div className={'mv-content'}>{m.content}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={'strong-points'}>
                <div className={'sp-sect container'}>
                    <div className={'sp-title'}>
                        Nuestros puntos fuertes
                    </div>

                    <div className={'row my-3'}>
                        {pfCards.map((p,key) => {
                            return(
                                <div className={'col-12 col-md-4 py-3 px-2'}>
                                    <div className={'sp-card'}>
                                        {p}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={'pt-4'}>
                        <a className={'btn btn-lg btn-jtc w-100'} href={'https://api.whatsapp.com/send?phone=51900169121'} target={'_blank'}>
                            Contactar
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Nosotros;

if (document.getElementById('nosotros')) {
    ReactDOM.render(<Nosotros />, document.getElementById('nosotros'));
}
