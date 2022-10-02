function Note({title, message}){
    return(
        <div className="note">
            <h2>{ title }</h2>
            <p>{ message }</p>
        </div>
    );
}

export default Note;