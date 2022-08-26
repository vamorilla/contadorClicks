import React from 'react';
import '../hojas-estilos/Boton.css';

function Boton({ texto, esBtnClick, manejoClick }) {
    return(
        <button className={ esBtnClick ? "btn-click" : "btn-reinicio" }
        onClick={ manejoClick }>
            {texto}
        </button>
    )
}

export default Boton;