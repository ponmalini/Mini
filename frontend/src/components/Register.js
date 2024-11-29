import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import './Register.css';

function Register() { 
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    const details = { username, password, email };
    setLoading(true);
    setErrorMessage('');

    try {
      // Send POST request with form data
      const res = await axios.post('http://localhost:3500/api/auth/register', details);

      // If successful, log response and alert user
      console.log('Response:', res.data);
      alert('Form submitted successfully');

      // Reset form fields and redirect
      setUsername('');
      setEmail('');
      setPassword('');

      setLoading(false);
      setErrorMessage(''); // Reset any error message on successful submission
      navigate('/login'); // Redirect to login page
    } catch (err) {
      // Handle different types of errors
      console.error('Error:', err);
      setLoading(false);

      if (err.response) {
        // Server responded with an error status
        setErrorMessage(err.response.data.message || 'Server Error');
      } else if (err.request) {
        // No response from the server
        setErrorMessage('No response from server');
      } else {
        // Any other errors
        setErrorMessage('Error occurred while submitting');
      }
    }
  };

  return (
    <div className="register-container">
      <img src="https://cdn.wallpapersafari.com/35/60/g46fz9.jpg" alt="Background" className="background-image" />
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Sign Up</h2>
        <div className="input-box" style={{ position: 'relative' }}>
          <input
            type="text"
            value={username}
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
              width: '20px',
              height: '20px', 
            }}
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input
            type="email"
            value={email}
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
              width: '20px', 
              height: '20px', 
            }}
          />

        </div>
        <div className="input-box" style={{ position: 'relative' }}>
          <input
            type="password"
            value={password}
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
              width: '20px', 
              height: '20px', 
            }}
          />
        
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <button
            type="button"
            className="link-button"
            onClick={() => alert("Forgot password functionality here")}>Forgot password
          </button>
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        <Link to="/login" className="btn link-btn">Login</Link>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Register;
