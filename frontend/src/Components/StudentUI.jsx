import React, { useEffect, useState } from 'react';
import './StudentUI.css';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { handleSuccess ,handleError} from '../util';
import { useNavigate } from 'react-router-dom';
function StudentUI() {
    
     const email =localStorage.getItem("email");
     const handleSubmit = async(e) => {
    e.preventDefault();
    
     const  ApplicationD = {StudentName:studentInfo.name,Room_no:studentInfo.room,email:email,ApplicationType:formData.applicationType,start_Date:formData.startDate,end_date:formData.endDate,reason:formData.reason,urgancy:formData.urgent,SupportingDoc:""};
      const res =  await axios.post("http://localhost:5000/auth/storeApplication",ApplicationD);
      if(res.data.success)
      {
        handleSuccess(res.data.msg);
        setFormData({
        applicationType: "",
        startDate: "",
        endDate: "",
        reason: "",
        urgent: false,
        documents: [],
      });

      }
      else{ handleError("No data present");};
  };
   const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox" || type === "radio") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
   
    const [formData, setFormData] = useState({
    applicationType: "",
    startDate: "",
    endDate: "",
    reason: "",
    urgent: false,
    documents: [],
  });
    useEffect(()=>{
        const fetchStudent = async()=>{

       
        if (!email) {
        console.error("No email found in localStorage");
        return;
      }
      else
      {
        const res = await axios.get('http://localhost:5000/Student',{params: { email }});
        setStudentInfo({name:res.data.data.s_name,department:res.data.data.department,room:res.data.data.r_no,application:res.data.data.application,staus:'Active'})
      }
        }

        fetchStudent();
    },[])
    const [activeTab, setActiveTab] = useState('status');
    const [studentInfo, setStudentInfo] = useState({
        name: 'Loading',
        department: 'Loading',
        room: 'fetching',
        application:-1,
        status: 'Active'
    });

    const [previousApplications] = useState([
        {
            id: 1,
            type: 'Leave Application',
            date: '2024-01-15',
            status: 'Approved',
            reason: 'Family Emergency'
        },
        {
            id: 2,
            type: 'Room Change',
            date: '2024-01-10',
            status: 'Pending',
            reason: 'Roommate Issues'
        },
        {
            id: 3,
            type: 'Leave Application',
            date: '2024-01-05',
            status: 'Rejected',
            reason: 'Medical Checkup'
        }
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return '#10b981';
            case 'Pending': return '#f59e0b';
            case 'Rejected': return '#dc2626';
            default: return '#6b7280';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Approved': return '✅';
            case 'Pending': return '⏳';
            case 'Rejected': return '❌';
            default: return '📋';
        }
    };

    const navigate = useNavigate();

    return (
        <div className="student-ui">
            {/* Header */}
            <div className="student-header">
                <div className="student-title">
                    <h1>Student Portal</h1>
                    <p>Hostel Management System</p>
                </div>
                <div className="student-profile">
                    <div className="student-photo">
                        <div className="photo-placeholder">
                            <span>👨‍🎓</span>
                        </div>
                        <div className="student-details">
                            <h3>{studentInfo.name}</h3>
                            <p>{studentInfo.department}</p>
                        </div>
                    </div>
                    <div className="status-indicator">
                        <span className="status-dot active"></span>
                        Active
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="student-tabs">
                <button 
                    className={activeTab === 'status' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('status')}
                >
                    Status
                </button>
                <button 
                    className={activeTab === 'apply' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('apply')}
                >
                    Apply
                </button>
                <button 
                    className={activeTab === 'location' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('location')}
                >
                    Location
                </button>
            </div>

            {/* Main Content */}
            <div className="student-content">
                {activeTab === 'status' && (
                    <div className="status-content">
                        <div className="status-cards">
                            <div className="status-card">
                                <div className="card-icon">🏠</div>
                                <div className="card-info">
                                    <h3>Room Assignment</h3>
                                    <p className="room-number">{studentInfo.room}</p>
                                    <span className="room-status active">Active</span>
                                </div>
                            </div>
                            <div className="status-card">
                                <div className="card-icon">📋</div>
                                <div className="card-info">
                                    <h3>Applications</h3>
                                    <p className="app-count">{(previousApplications.length>studentInfo.application)?previousApplications.length:studentInfo.application}</p>
                                    <span className="app-status pending">1 Pending</span>
                                </div>
                            </div>
                            <div className="status-card">
                                <div className="card-icon">⏰</div>
                                <div className="card-info">
                                    <h3>Check-in Status</h3>
                                    <p className="check-time">Last: 2 hours ago</p>
                                    <span className="check-status active">Checked In</span>
                                </div>
                            </div>
                        </div>

                        <div className="quick-actions">
                            <button className="action-btn primary"  onClick={() => setActiveTab('apply')}>
                                📝 New Application
                            </button>
                           {/* <button className="action-btn secondary">
                                📍 Check-in
                            </button>*/}
                            <button className="action-btn secondary">
                                📞 Contact Warden
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'apply' && (
                    <div className="apply-content">
      <form className="application-form" onSubmit={handleSubmit}>
        <h3>New Application</h3>

        <div className="form-group">
          <label>Application Type</label>
          <select
            name="applicationType"
            value={formData.applicationType}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="Leave Application">Leave Application</option>
            <option value="Room Change Request">Room Change Request</option>
            <option value="Maintenance Request">Maintenance Request</option>
            <option value="Special Permission">Special Permission</option>
          </select>
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Reason</label>
          <textarea
            name="reason"
            placeholder="Please provide detailed reason..."
            rows="4"
            value={formData.reason}
            onChange={handleChange}
          />
        </div>

        <div
          className="form-group"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <input
            type="radio"
            name="urgent"
            checked={formData.urgent}
            onChange={handleChange}
          />
          <label>URGENT </label>
        </div>

        <div className="form-group">
          <label>Supporting Documents</label>
          <input
            type="file"
            name="documents"
            multiple
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
          <button type="button" className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
                )}

                {activeTab === 'location' && (
                    <div className="location-content">
                        <div className="location-info">
                            <h3>Current Location</h3>
                            <div className="location-card">
                                <div className="location-icon">📍</div>
                                <div className="location-details">
                                    <h4>Hostel Building A</h4>
                                    <p>Room: {studentInfo.room}</p>
                                    <p>Floor: Ground Floor</p>
                                    <p>Last Updated: 2 hours ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="location-actions">
                            <button className="location-btn">
                                📍 Update Location
                            </button>
                            <button className="location-btn">
                                🗺️ View Map
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Previous Applications */}
            <div className="applications-section">
                <h3>Previous Applications</h3>
                <div className="applications-list">
                    {previousApplications.map((app) => (
                        <div key={app.id} className="application-item">
                            <div className="app-icon">
                                {getStatusIcon(app.status)}
                            </div>
                            <div className="app-details">
                                <h4>{app.type}</h4>
                                <p>{app.reason}</p>
                                <span className="app-date">{app.date}</span>
                            </div>
                            <div className="app-status">
                                <span 
                                    className="status-badge" 
                                    style={{ backgroundColor: getStatusColor(app.status) }}
                                >
                                    {app.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default StudentUI;
