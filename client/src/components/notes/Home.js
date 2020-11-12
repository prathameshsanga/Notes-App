import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import axios from 'axios';

export default function Home() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const res = await axios.get('api/notes');
    setNotes(res.data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const deleteNote = async (id) =>{
    try {
      await axios.delete(`api/notes/${id}`)
      getNotes()
    } catch (err) {
      window.location.href='/'
    }
  }

  return (
    <div className='note-wrapper'>
      {notes.map((note) => (
        <div className='card' key={note._id}>
          <h4 title={note.title}>{note.title}</h4>
          <div className='text-wrapper'>
            <p>{note.content}</p>
          </div>
          <p className='date'>{format(note.date)}</p>
          <div className='card-footer'>
            <Link to={`edit/${note._id}`}>Edit</Link>
          </div>
          <button className='close' onClick={() => deleteNote(note._id)}>X</button>
        </div>
      ))}
    </div>
  );
}
