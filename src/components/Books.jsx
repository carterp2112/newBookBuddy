/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Books() {
    const API = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books';
    const [ books, setBooks ] = useState([]);
    
    useEffect(() => {
        async function getBooks() {
            const response = await axios.get(API);
            setBooks(response.data.books);
        }
        getBooks()
        
    }, [])

  return (
    <div id="book-list">
        <h2>Books:</h2>
        <ul>
            {books.map(book => (
                <li key={book.id}><Link to={`/${book.id}`}>{book.title}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Books
