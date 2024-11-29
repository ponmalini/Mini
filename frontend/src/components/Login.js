import React, { useState } from 'react';
import { login } from './authService';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  //const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log({ email,password });
      const { data } = await login({ email,password });
      console.log(data);
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    
    <div className="login-container">
      <img
        src="https://cdn.wallpapersafari.com/35/60/g46fz9.jpg"
        alt="Login Background"
        className="background-image"
      />
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {/* <div className="input-box" style={{ position: 'relative' }}>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            style={{ paddingLeft: '30px' }}
          />
          <img
            src="https://th.bing.com/th/id/OIP.Huv6Jw8ptRGaoV7UGmcnYwHaHa?rs=1&pid=ImgDetMain"
            alt="Username Icon"
            style={{
              position: 'absolute',
              left: '10px',
              top: '35%',
              transform: 'translateY(-50%)',
              width: '20px', // Adjust image size
              height: '20px', // Adjust image size
            }}
          />
        </div> */}
        <div className="input-box" style={{ position: 'relative' }}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={{ paddingLeft: '30px' }}
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/581/999/original/email-icon-vector-illustration.jpg"
            alt="Password Icon"
            style={{
              position: 'absolute',
              left: '10px',
              top: '35%',
              transform: 'translateY(-50%)',
              width: '20px', // Adjust image size
              height: '20px', // Adjust image size
            }}
          />
        </div>
        <div className="input-box" style={{ position: 'relative' }}>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{ paddingLeft: '30px' }}
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/eldorado-basic/40/unlock-512.png"
            alt="Password Icon"
            style={{
              position: 'absolute',
              left: '10px',
              top: '35%',
              transform: 'translateY(-50%)',
              width: '20px', // Adjust image size
              height: '20px', // Adjust image size
            }}
          />


        </div>
        <div className='login-btn'>
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
