/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function SingleBook() {

    const { name } = useParams();
    const [ books, setBooks ] = useState([]);
    const token = localStorage.getItem('token');

    async function handleCheckout() {
      if(token) {
        try {
          const data = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${name}`, {
            available: false
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      }
    }

    useEffect(() => {
        async function getBook() {
            const response = await axios.get(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${name}`);
            setBooks(response.data.book);
        }
        getBook();
    }, []);

  return (
    <div className='book'>
        <h1>{books.title}</h1>
        <h2><i>{books.author}</i></h2>
        <img src={books.coverimage}></img>
        <p>{books.description}</p>
        <h3>Available: {books.available}</h3>
        <button onClick={handleCheckout}>Checkout Book</button>
    </div>
  )
}

export default SingleBook


/*
const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${name}`, {
            method: "PATCH",
            headers: {
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ available: false })
          })

          const data = await response.json();
*/