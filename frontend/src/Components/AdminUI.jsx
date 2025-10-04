import React, { useState ,useEffect} from 'react';
import './AdminUI.css';
import axios from 'axios';
import { handleError, handleSuccess } from '../util';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AdminUI() {
  
    const navigate = useNavigate();
    useEffect(() => {

        console.log(localStorage.email+" I am from server");
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getAdmin");
                console.log('Response:', response.data);
                setTotalRooms(response.data.data);
            } catch (err) {
                console.error('Error:', err);
                handleError(err.message);
            }
        };
        const AllData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getStud");
                console.log('Response:', response.data);
                setTotalStudents(response.data.data);
            } catch (err) {
                console.error('Error:', err);
                handleError(err.message);
            }
        };
        fetchData();
        AllData();
    }, []);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [TotalRooms,setTotalRooms]=useState(null); 
    const [students,setTotalStudents] = useState(0);
    // Sample data
    const rooms = [
        { id: 'A101', status: 'occupied', student: 'John Doe', capacity: 2, current: 2 },
        { id: 'A102', status: 'available', student: null, capacity: 2, current: 1 },
        { id: 'A103', status: 'maintenance', student: null, capacity: 2, current: 0 },
        { id: 'B201', status: 'occupied', student: 'Jane Smith', capacity: 2, current: 2 },
        { id: 'B202', status: 'available', student: null, capacity: 2, current: 0 },
        { id: 'B203', status: 'occupied', student: 'Mike Johnson', capacity: 2, current: 1 },
        { id: 'C301', status: 'available', student: null, capacity: 2, current: 0 },
        { id: 'C302', status: 'occupied', student: 'Sarah Wilson', capacity: 2, current: 2 },
        { id: 'C303', status: 'available', student: null, capacity: 2, current: 1 }
    ];

    const notifications = [
        { id: 1, type: 'application', message: 'New leave application from Rajesh Kumar', time: '2 min ago', urgent: true },
        //{ id: 2, type: 'maintenance', message: 'Room A103 requires maintenance', time: '1 hour ago', urgent: false },
        { id: 3, type: 'checkin', message: 'Student check-in completed - B201', time: '3 hours ago', urgent: false },
        { id: 2, type: 'application', message: 'Leave application approved for Jane Smith', time: '5 hours ago', urgent: false }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'occupied': return '#10b981';
            case 'available': return '#3b82f6';
            case 'maintenance': return '#f59e0b';
            default: return '#6b7280';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'occupied': return '🏠';
            case 'available': return '🏠';
            case 'maintenance': return '🔧';
            default: return '🏠';
        }
    };

    return (
        <div className="admin-ui">
            {/* Header */}
            <div className="admin-header">
                <div className="admin-title">
                    <h1>Admin Dashboard</h1>
                    <p>Hostel Management System</p>
                </div>
                <div className="admin-profile">
                    <div className="admin-photo">
                        <div className="photo-placeholder">
                            <span>👤</span>
                        </div>
                        <div className="admin-details">
                            <h3>Dr. Sudarshan Kumar</h3>
                            <p>Administrator</p>
                        </div>
                    </div>
                    <div className="admin-actions">
                        <button className="active-btn">
                            <span className="status-dot"></span>
                            Active
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="admin-tabs">
                <button 
                    className={activeTab === 'dashboard' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('dashboard')}
                >
                    Dashboard
                </button>
                <button 
                    className={activeTab === 'rooms' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('rooms')}
                >
                    Rooms
                </button>
                <button 
                    className={activeTab === 'applications' ? 'tab active' : 'tab'}
                    onClick={() => setActiveTab('applications')}
                >
                     Applications 🔔 <span className="alert-count" >{notifications.length}</span>
                    
                </button>
            </div>

            {/* Main Content */}
            <div className="admin-content">
                {activeTab === 'dashboard' && (
                    <div className="dashboard-content">
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-icon">🏠</div>
                                <div className="stat-info">
                                    <h3>{TotalRooms}</h3>
                                    <p>TotalRooms</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">👥</div>
                                <div className="stat-info">
                                    <h3>{students}</h3>
                                    <p>Students</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">📋</div>
                                <div className="stat-info">
                                    <h3>8</h3>
                                    <p>Pending Applications</p>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-icon">✅</div>
                                <div className="stat-info">
                                    <h3>12</h3>
                                    <p>Approved Today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'rooms' && (
                    <div className="rooms-content">
                        <div className="rooms-grid">
                            {rooms.map((room) => (
                                <div 
                                    key={room.id} 
                                    className={`room-card ${room.status} ${selectedRoom === room.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedRoom(room.id)}
                                >
                                    <div className="room-header">
                                        <span className="room-icon">{getStatusIcon(room.status)}</span>
                                        <span className="room-number">{room.id}</span>
                                    </div>
                                    <div className="room-status" style={{ backgroundColor: getStatusColor(room.status) }}>
                                        {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                                    </div>
                                    <div className="room-details">
                                        <p><strong>Capacity:</strong> {room.current}/{room.capacity}</p>
                                        {room.student && <p><strong>Student:</strong> {room.student}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'applications' && (
                    <div className="applications-content">
                        <div className="notifications-list">
                            {notifications.map((notification) => (
                                <div key={notification.id} className={`notification-card ${notification.urgent ? 'urgent' : ''}`}>
                                    <div className="notification-icon">
                                        {notification.type === 'application' && '📋'}
                                        {notification.type === 'maintenance' && '🔧'}
                                        {notification.type === 'checkin' && '✅'}
                                    </div>
                                    <div className="notification-content">
                                        <h4>{notification.message}</h4>
                                        <p className="notification-time">{notification.time}</p>
                                    </div>
                                    <div className="notification-actions">
                                        <button className="action-btn view">View</button>
                                        {notification.urgent && <button className="action-btn urgent">Urgent</button>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div className="admin-bottom-nav">
                <div className="search-bar">
                    <input type="text" placeholder="Search students, rooms, or applications..." />
                    <button className="search-btn">🔍</button>
                </div>
                <div className="quick-actions">
                    <button className="quick-btn" onClick={()=>{navigate('/addStudent')}}>➕ Add Student</button>
                    <button className="quick-btn">📊 Reports</button>
                    <button className="quick-btn">⚙️ Settings</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default AdminUI;
