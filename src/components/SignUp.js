// src/components/SignUp.js
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed up:', user);
      navigate('/outing-form');
    } catch (error) {
      console.error('Error during sign-up:', error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <button onClick={handleSignUp}>Sign Up with Google</button>
      <div className="redirect-prompt">
        <p>Already have an account?</p>
        <button onClick={() => navigate('/sign-in')}>Sign In</button>
      </div>
    </div>
  );
};

export default SignUp;





