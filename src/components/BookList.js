import React,{ useContext } from 'react'
import { BookContext }  from '../contexts/BookContext'

const BookList = ({book}) => {
    const { dispatch } = useContext(BookContext);
    const removeHandle = (e) => {
        e.preventDefault();
        dispatch({ type: 'REMOVE_BOOK', id: book.id });
        //removeBook(book.id);
    }
    return (
        <li onClick={removeHandle}>
            <h3>{book.name}</h3>
            <small><b>Author : </b>{book.author}</small>
        </li>
    );
}
 
export default BookList;