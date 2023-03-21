import { useState } from 'react'

function Login({ onLogin, setCurrentUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        }
      });
    }

    function onSignup(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        
        fetch('/users', {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
            .then( res => {
                if(res.ok) {
                    res.json().then(setCurrentUser)
                }
            else {
                res.json()
            }
        })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Login With Username</h3>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <label htmlFor="password">Password: </label>

        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit" onClick={(e) => onSignup(e)}>Signup</button>
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login;