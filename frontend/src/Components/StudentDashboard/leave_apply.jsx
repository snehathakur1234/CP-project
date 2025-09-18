// App.jsx or App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';



// Page 2: Leave Application Form
function LeaveApplicationPage() {
  return (
    <div>
      <h2>Hostel Leave Application Form</h2>
      <form>
        <label>
          Student Name:
          <input type="text" name="studentName" />
        </label>
        <br />
        <label>
          Student Phone number:
          <input type="number" name="sphn_no" />
        </label>
        <br />
        <label>
            Date of Birth:
          <input type="date" name="dob" />
        </label>
        <br />
        <label>
            Email of Student:
          <input type="number" name="parent_no" />
        </label>
        <br/>
        <label>
            Room no of student:
          <input type="number" name="room_no" />
        </label>
        <br />
        <label>
            Student Class:
          <input type="text" name="class" />
        </label>
        <br />
        <label>
          Reason:
          <textarea name="reason" />
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

// Main App with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leave-application" element={<LeaveApplicationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
