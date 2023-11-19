/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import React from 'react'
import { Link } from 'react-router-dom'

function Navigations() {
  const token = window.localStorage.getItem('token');

  return (
    <div>
        <nav>
            <h1>Library App</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {!token && <Link to="/login">Login</Link>}
            </li>
            {token && <Link to="/account">Your Account</Link>}
          </ul>
        </nav>
    </div>
  )
}

export default Navigations
