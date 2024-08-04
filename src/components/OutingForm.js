// src/components/OutingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const OutingForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    hostelName: '',
    contactNumber: '',
    outTime: new Date().toLocaleTimeString()
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3s000/outing-form', formData);
      alert('Outing form submitted successfully');
    } catch (error) {
      console.error('Failed to submit outing form', error);
      alert('Failed to submit outing form');
    }
  };

  return (
    <div>
      <h2>Outing Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Roll Number:</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hostel Name:</label>
          <input
            type="text"
            name="hostelName"
            value={formData.hostelName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Out Time:</label>
          <input
            type="text"
            name="outTime"
            value={formData.outTime}
            readOnly
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OutingForm;
