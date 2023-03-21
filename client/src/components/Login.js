import { useState } from 'react'

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("")
  
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
        <label htmlFor="username">Password: </label>

        <input
          type="text"
          id="password"
        //   value={password}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login;