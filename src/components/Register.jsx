/* TODO - add your code to create a functional React component that renders a registration form */

import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ firstname, setFName ] = useState();
    const [ lastname, setLName ] = useState();
    const [ token, setToken ] = useState();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const json = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {firstname: firstname, lastname: lastname, email: email, password: password});
            setToken(json)
            console.log(token);
        } catch (err) {
            console.error(err);
        }
    }

  return (
    <div>
      <form>
        <label>
          Email: <input type="text" id='username' onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Password: <input type="text" id='password' onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <label>
          First Name: <input type="text" id='firstname' onChange={(e) => setFName(e.target.value)}/>
        </label>
        <label>
          Last Name: <input type="text" id='lastname' onChange={(e) => setLName(e.target.value)}/>
        </label>
        <label>
          <button type="submit" onClick={handleSubmit}>Log In</button>
        </label>
      </form>
    </div>
  )
}

export default Register
