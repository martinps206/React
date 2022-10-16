import React from 'react';
import '../styles/Testimonio.css'

function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='img-testimonio' src={require(`../img/${props.imagen}.jpg`)} alt="Foto de Matematico" />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre}</p>
                <p className='cargo-testimonio'>{props.cargo} {props.anios}</p>
                <p className='texto-testimonio'>{props.biografia}</p>
            </div>
        </div>
    );
}

export default Testimonio;