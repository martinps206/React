import { NotesProvider } from './contexts/NotesContext';
import NotesForm from './notes/NotesForm';
import NotesList from './notes/NotesList';
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <NotesProvider>
      <NotesForm/>
      <NotesList />
      </NotesProvider>
      
    </div>
  )
}

export default App;