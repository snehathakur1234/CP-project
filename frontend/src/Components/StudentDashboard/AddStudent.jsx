import React, { useState } from 'react';
import './AddStudent.css';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentClass: '',
    division: '',
    roomNumber: '',
    studentPhone: '',
    parentPhone: '',
    address: '',
    photoUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="add-student-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentClass">Class</label>
            <input
              type="text"
              id="studentClass"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="division">Division</label>
            <input
              type="text"
              id="division"
              name="division"
              value={formData.division}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="roomNumber">Room Number</label>
            <input
              type="text"
              id="roomNumber"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="studentPhone">Student Phone</label>
            <input
              type="tel"
              id="studentPhone"
              name="studentPhone"
              value={formData.studentPhone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="parentPhone">Parent Phone</label>
            <input
              type="tel"
              id="parentPhone"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="photoUrl">Photo URL (Optional)</label>
          <input
            type="url"
            id="photoUrl"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
            placeholder="https://example.com/photo.jpg"
          />
        </div>
        
        <button type="submit" className="submit-btn">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;