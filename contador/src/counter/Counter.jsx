import { useState } from 'React'
function Counter(){
    // El estado
    const [contador, setContador] = useState(0);

    return(
        <div>
            <p>haz hecho click {contador} veces a este boton</p>
            <button onClick={ () => { setContador(contador + 1)  } }>incrementar</button>
        </div>
        
    );
}

export default Counter;
