import { useState, useEffect } from 'react'
function Countdown() {
    //  targetSeconds, elapsedSeconds
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function(){

        if (targetSeconds === null) return;

        // targetSeconds tiene un valor
        setElapsedSeconds(0);

        let interval = setInterval(function(){
            setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);

    }, [targetSeconds]);

    function parseForm(ev) {
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds)); 
        
    }

    if(elapsedSeconds >= targetSeconds && targetSeconds !== null){
        return(
            <>
                <p>
                    termino el conteo
                </p>
                <button onClick={ () => setTargetSeconds(null) }>Reiniciar</button>
            </>
            
        )
    }

    if (targetSeconds !== null) {
        return(
            <p>
                Taltan  { targetSeconds - elapsedSeconds } segundos
            </p>
        );
    }

    

    return(
        <>
            <p>
                Cuanto segundo quieres contar
            </p>
            <form action="#" onSubmit={ ev => parseForm(ev) }>
                <input type="number" name="seconds" id="" />
                <button>Iniciar</button>
            </form>
        </>
        
    )
    
}

export default Countdown;