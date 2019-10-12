import React, { useState } from 'react';
import { serverHandshake } from '../auth';

const Login = ({ history }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = event =>
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await serverHandshake().post('/login', credentials);
    localStorage.setItem('token', response.data.payload);
    history.push('/bubbles');
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <input type='submit' value='Login' />
      </form>
    </>
  );
};

export default Login;
