import React, { useState } from 'react';

function Login({ onLogin }) {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailOrUsernameChange = event => {
    setEmailOrUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleLogin = event => {
    event.preventDefault();
    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_or_username: emailOrUsername, password }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then(user => {
        onLogin(user);
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Login failed');
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email_or_username">Email or Username:</label>
        <input type="text" id="email_or_username" value={emailOrUsername} onChange={handleEmailOrUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default Login;

