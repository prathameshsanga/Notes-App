import React from 'react';
import Header from './notes/Nav';
import Home from './notes/Home';
import EditNote from './notes/EditNote';
import CreateNote from './notes/CreateNote';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Notes() {
  return (
    <Router>
      <div className='notes-page'>
        <Header />
        <section>
          <Route path='/' component={Home} exact />
          <Route path='/create' component={CreateNote} exact />
          <Route path='/edit/:id' component={EditNote} exact />
        </section>
      </div>
    </Router>
  );
}
