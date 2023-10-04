import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

const Login = () => {
  const navigate = useNavigate(); // Create a navigate function to perform redirects
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      
      // Redirect the user to a different page upon successful login
      navigate('/MainPage'); // Replace '/MainPage' with your desired route
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1>CSC131G5</h1>
            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <button type="submit" onClick={onSubmit}>
                Log in
              </button>

              {error && <p>{error}</p>}
            </form>

            <p>Don't have an account? Sign up <a href="/signup">here</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
