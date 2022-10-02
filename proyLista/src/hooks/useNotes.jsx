import { useEffect, useState } from 'react'; 

const LOCALSTORAGE_KEY = "MIAPP.list";

function useNotes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        let localStorageSavedNotes = localStorage.getItem(LOCALSTORAGE_KEY);
        if (localStorageSavedNotes) {
            JSON.parse(localStorageSavedNotes);
        }
    },[]);

    useEffect(() => {
        if(!notes || notes.length == 0) return;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes))
    }, [notes]);
    
    function add(title, message) {
        const id = Date.now();
        const noteObject = { title, message, id };
        setNotes([noteObject, ...notes]);
    }

    function removeNote(id) {
        let newNotes = notes.filter(note => notes.id !== id);
        setNotes(newNotes);
    }

    return{
        notes,
        add,
        removeNote
    }
}

export default useNotes;
