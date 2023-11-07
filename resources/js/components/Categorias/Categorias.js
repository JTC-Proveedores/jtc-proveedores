import React from "react";
import ReactDOM from "react-dom";

const Categorias = ({}) =>{

    let url = window.location;

    return(
        <>
            <div>Hola</div>
        </>
    )
};

export default Categorias;

if (document.getElementById('categorias')) {
    ReactDOM.render(<Categorias />, document.getElementById('categorias'));
}
