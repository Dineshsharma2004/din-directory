// src/components/SignIn.js
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import CSS for styling

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  React.useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const user = result.user;
          console.log('User signed in:', user);
          navigate('/outing-form');
        }
      } catch (error) {
        console.error('Error fetching redirect result:', error.message);
      }
    };

    fetchRedirectResult();
  }, [navigate]);

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <button onClick={handleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
