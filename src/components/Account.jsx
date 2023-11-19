/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Account() {
    
    const [ user, setUser ] = useState({});
    const [ reservations, setReservations ] = useState([]);
    const token = localStorage.getItem('token')

    function signOut() {
        localStorage.clear();
    }

    async function getReservations() {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
          })
        
        const data = await response.json();
        setReservations(data.reservation);
      } catch (err) {
        console.error(err);
      }
    }

    async function getUser() {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        setUser(data);
    } catch (err) {
        console.error(err);
    }
    }

    async function del(id) {
      const del = await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(del);
    }

    
    useEffect(() => {
      getUser();
      getReservations();

    }, [])

  return (
    <div>
      <section className='account'>
        <h3>Email: {user.email}</h3>
        <h3>Name: {user.firstname} {user.lastname}</h3>
        <button onClick={signOut}>Sign Out</button>
      </section>
      <section>
        <ul>
          {reservations.map((r) => {
            return (<li key={r.id}>{r.title} <button onClick={() => del(r.id)}>X</button></li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default Account
