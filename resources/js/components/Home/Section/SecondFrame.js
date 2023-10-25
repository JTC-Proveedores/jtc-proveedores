import React from "react";

const SecondFrame = ({}) => {

    let url = window.location;


    return(
        <div className={'container home-area-2'}>
            <div className={'title'}>¡HOLA!</div>
            <p className={'speech'}>
                Somos <span className={'el1'}>JTC proveedores Industriales</span>, una empresa especializada en la gestión de cadenas de suministro. Proveemos productos de marcas globales de uso industrial. Tenemos enfoque en el servicio al cliente. Contamos con almacenes que garantizan entregas puntuales y un sólido soporte postventa a través de nuestros asesores comerciales altamente capacitados. Nuestra ventaja competitiva radica en nuestra profunda comprensión y experiencia en los mercados nacionales e internacionales, lo que nos permite ofrecer un nivel de servicio excepcional y fortalecer relaciones sólidas con nuestros clientes.
            </p>
            <div className={'mt-4 text-center'}>
                <a className="btn btn-lg btn-jtc-ext" href="#" role="button">
                    Contáctanos
                </a>
            </div>
        </div>
    )
};

export default SecondFrame
