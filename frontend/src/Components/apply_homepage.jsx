import React from 'react';
import { useNavigate } from 'react-router-dom';

function ApplyHostelLeaveButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/leave-application'); // Redirect to leave application page
  };

  return (
    <button onClick={handleClick}>
      Applying for Hostel Leave
    </button>
  );
}

export default ApplyHostelLeaveButton;
