import React,{ useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

import BookList from './BookList';

const Books = () => {
    const {books} = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map((book) => {
                    return <BookList key={book.id} book={book} />
                })}
            </ul>
        </div>
    ): (
        <p className="no-books">Books are not available here!</p>
    );
}
 
export default Books;