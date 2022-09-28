import imagenAvatar from './assets/martin.jpg'
import './PresentationCard.css'
function PresentationCard(){
    let name = 'Martin'
    let course = 'desarrollador Java'
    return(

        <div className="presentation-card">
            <img src={imagenAvatar} alt="Avatar" className='avatar' />
            <h1>Hola, soy {name} y trabajo como {course}</h1>
        </div>
    );
}

export default PresentationCard;