import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [ name, setName ] = useState('');
    const [ author, setAuthor ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //addBook(name,author);
        dispatch({ type: 'ADD_BOOK', books: { name, author } });
        setName('');
        setAuthor('');
    }
    return (
        <div className="book-form">
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                <input type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
                <button type="submit">Add Books</button>
            </form>
        </div>
    );
}
 
export default BookForm;