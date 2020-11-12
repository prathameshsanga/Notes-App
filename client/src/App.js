import React, { useState, userEffect } from 'react';
import axios from 'axios';
import Notes from './components/Notes';

function App() {
  return (
    <div className='App'>
      <Notes />
    </div>
  );
}

export default App;
