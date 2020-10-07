import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const Header = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="header">
            <h1>Our Books</h1>
            <p>You have { books.length } books available</p> 
        </div>
    );
}
 
export default Header;