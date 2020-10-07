import React, { createContext, useEffect, useReducer } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('book');
        return localData ? JSON.parse(localData) : [];
    });

    // const addBook = (name, author) => {
    //     setBooks([...books, { id: uuidv4(), name, author }]);
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }

    useEffect(()=>{
        localStorage.setItem('book', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;