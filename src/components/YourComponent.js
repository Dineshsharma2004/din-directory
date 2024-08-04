// src/components/YourComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState({ name: '', rollNumber: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/data', data);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={data.rollNumber}
          onChange={(e) => setData({ ...data, rollNumber: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default YourComponent;
