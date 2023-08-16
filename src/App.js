import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Employee Login</h2>
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px', backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>User Name</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '16px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '16px' }} />
        </div>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', fontSize: '16px', cursor: 'pointer', width: '100%' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;




