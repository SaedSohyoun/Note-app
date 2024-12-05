import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]); // State to store notes
  const [input, setInput] = useState(''); // State to manage input field

  // Add a new note
  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, { text: input, date: new Date().toLocaleString(), important: false }]);
      setInput('');
    }
  };

  // Delete a note by index
  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  // Toggle importance of a note
  const toggleImportant = (index) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, important: !note.important } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>SAED IS DE BEST</h1>
      </header>

      <div className="note-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div key={index} className={`note ${note.important ? 'important' : ''}`}>
              <div className="note-content">
                <p>{note.text}</p>
                <span className="note-date">{note.date}</span>
              </div>
              <div className="note-actions">
                <button onClick={() => toggleImportant(index)}>
                  {note.important ? '⭐' : '⭐'}
                </button>
                <button onClick={() => deleteNote(index)}>🗑</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-notes">No notes available. Add some!</p>
        )}
      </div>
    </div>
  );
}

export default App;