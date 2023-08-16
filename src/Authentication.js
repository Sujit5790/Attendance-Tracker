import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      const { token } = response.data;
      setToken(token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="App">
      <h1>JWT Authentication Example</h1>
      {!token ? (
        <div>
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome!</h2>
          
        </div>
      )}
    </div>
  );
}

export default App;