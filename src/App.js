// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import OutingForm from './components/OutingForm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/outing-form" element={<OutingForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

