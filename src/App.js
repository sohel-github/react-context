import React from 'react';

import BookContextProvider from './contexts/BookContext';

import Header from './components/Header';
import Books from './components/Books';
import BookForm from './components/BookForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Header />
        <Books />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
