import React from "react";
import ReactDOM from "react-dom";

const Nosotros = ({}) =>{

    let url = window.location;

    return(
        <div className={'nosotros-sect'}>
            <div className={'sub-image'}>
                Nosotros
            </div>
            <div>Hola</div>
        </div>
    )
};

export default Nosotros;

if (document.getElementById('nosotros')) {
    ReactDOM.render(<Nosotros />, document.getElementById('nosotros'));
}
