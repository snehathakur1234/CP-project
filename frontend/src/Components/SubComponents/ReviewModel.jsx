import React from "react";
import "./ReviewModel.css";

const ReviewModel = ({ application, onClose, onAccept, onReject }) => {
  if (!application) return null; // no app selected
  
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-GB"); // dd/mm/yyyy
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Review Application</h2>
        <p><strong>Type:</strong> {application.ApplicationType}</p>
        <p><strong>Title:</strong> {application.reason}</p>
        <p><strong>Student:</strong> {application.StudentName}</p>
        <p><strong>Start Date:</strong> {formatDate(application.start_Date) || "N/A"}</p>
        <p><strong>End Date:</strong> {formatDate(application.end_date) || "N/A"}</p>
        <p><strong>Remarks:</strong> {(application.urgancy)?"Urgant":"Normal"}</p>

        <div className="modal-actions">
          <button className="btn btn-primary" onClick={() => onAccept(application)}>✅ Accept</button>
          <button className="btn btn-danger" onClick={() => onReject(application)}>❌ Reject</button>
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModel;
