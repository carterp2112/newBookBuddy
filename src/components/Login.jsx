/* TODO - add your code to create a functional React component that renders a login form */

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPw ] = useState('');
  let unauthorized = false;

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {email, password});
      const token = response.data.token
      console.log(token);
      window.localStorage.setItem('token', token);
      
    } catch (err) {
      console.error("Unauthorized error: ", err)
      unauthorized = true;
    }
  }


  return (
    <div>
      <form>
        <label>
          Email: <input type="text" id='username' onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Password: <input type="text" id='password' onChange={(e) => setPw(e.target.value)}/>
        </label>
        <label>
          <button type="submit" onClick={handleLogin}>Log In</button>
        </label>
        <Link to='/register' id='signup'>Or Sign up!</Link>
      </form>
      {unauthorized && <h2 id="unauthorized">You are not authorized.</h2>}
    </div>
  )
}

export default Login
