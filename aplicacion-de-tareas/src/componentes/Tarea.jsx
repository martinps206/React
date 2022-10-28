import { AiOutlineCloseSquare } from "react-icons/ai";
import React from "react";
import '../style/Tarea.css'

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className="tarea-texto"
                onClick={ () => completarTarea(id) } >
                { texto }
            </div>
            <div 
                className="tarea-contenedor-iconos"
                onClick={ () => eliminarTarea(id) }>
                <AiOutlineCloseSquare className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea; 

/* react icon
npm install react-icons --save */