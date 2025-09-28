import React, { useState } from 'react';
import './ParentUI.css';

function ParentUI() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    
    // Sample data
    const previousApplications = [
        {
            id: 1,
            studentName: 'Rajesh Kumar',
            type: 'Leave Application',
            date: '2024-01-15',
            status: 'Approved',
            reason: 'Family Emergency - Mother\'s Surgery'
        },
        {
            id: 2,
            studentName: 'Rajesh Kumar',
            type: 'Room Change',
            date: '2024-01-10',
            status: 'Pending',
            reason: 'Roommate Issues'
        },
        {
            id: 3,
            studentName: 'Rajesh Kumar',
            type: 'Leave Application',
            date: '2024-01-05',
            status: 'Rejected',
            reason: 'Medical Checkup'
        }
    ];

    const activityData = [
        { date: '2024-01-20', status: 'checked_in', time: '08:30 AM', location: 'Hostel A-105' },
        { date: '2024-01-19', status: 'checked_out', time: '06:00 PM', location: 'Library' },
        { date: '2024-01-19', status: 'checked_in', time: '09:00 PM', location: 'Hostel A-105' },
        { date: '2024-01-18', status: 'checked_in', time: '08:15 AM', location: 'Hostel A-105' },
        { date: '2024-01-17', status: 'checked_out', time: '07:30 PM', location: 'Cafeteria' },
        { date: '2024-01-17', status: 'checked_in', time: '10:00 PM', location: 'Hostel A-105' },
        { date: '2024-01-16', status: 'checked_in', time: '08:45 AM', location: 'Hostel A-105' },
        { date: '2024-01-15', status: 'checked_out', time: '05:00 PM', location: 'Hospital' }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return '#10b981';
            case 'Pending': return '#f59e0b';
            case 'Rejected': return '#dc2626';
            default: return '#6b7280';
        }
    };

    const getActivityStatusColor = (status) => {
        switch (status) {
            case 'checked_in': return '#10b981';
            case 'checked_out': return '#dc2626';
            default: return '#6b7280';
        }
    };

    const getActivityIcon = (status) => {
        switch (status) {
            case 'checked_in': return '🏠';
            case 'checked_out': return '🚪';
            default: return '❓';
        }
    };

    return (
        <div className="parent-ui">
            {/* Header */}
            <div className="parent-header">
                <div className="parent-title">
                    <h1>Parent Portal</h1>
                    <p>Monitor Your Child's Hostel Activities</p>
                </div>
                <div className="parent-info">
                    <div className="student-info">
                        <div className="student-avatar">
                            <span>👨‍🎓</span>
                        </div>
                        <div className="student-details">
                            <h3>Rajesh Kumar</h3>
                            <p>Student ID: E2023001</p>
                            <p>Room: A-105</p>
                        </div>
                    </div>
                    <div className="parent-status">
                        <button className="check-btn">
                            <span>🔍</span>
                            Check Status
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
                <div className="stat-item">
                    <div className="stat-icon">📅</div>
                    <div className="stat-content">
                        <h4>This Week</h4>
                        <p>7 Days Active</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">🏠</div>
                    <div className="stat-content">
                        <h4>Room Status</h4>
                        <p>Currently In Room</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">📋</div>
                    <div className="stat-content">
                        <h4>Applications</h4>
                        <p>3 Total, 1 Pending</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">✅</div>
                    <div className="stat-content">
                        <h4>Compliance</h4>
                        <p>95% Good Standing</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="parent-content">
                {/* Previous Applications */}
                <div className="applications-section">
                    <div className="section-header">
                        <h3>Previous Applications</h3>
                        <button className="view-all-btn">View All</button>
                    </div>
                    <div className="applications-list">
                        {previousApplications.map((app) => (
                            <div key={app.id} className="application-item">
                                <div className="app-icon">
                                    <span>{app.type === 'Leave Application' ? '📋' : '🏠'}</span>
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

                {/* Activity Calendar */}
                <div className="activity-section">
                    <div className="section-header">
                        <h3>Activity Log</h3>
                        <div className="date-selector">
                            <input 
                                type="date" 
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="activity-calendar">
                        <div className="calendar-header">
                            <div className="calendar-day">Mon</div>
                            <div className="calendar-day">Tue</div>
                            <div className="calendar-day">Wed</div>
                            <div className="calendar-day">Thu</div>
                            <div className="calendar-day">Fri</div>
                            <div className="calendar-day">Sat</div>
                            <div className="calendar-day">Sun</div>
                        </div>
                        <div className="calendar-grid">
                            {Array.from({ length: 35 }, (_, i) => {
                                const date = new Date();
                                date.setDate(date.getDate() - 21 + i);
                                const dateStr = date.toISOString().split('T')[0];
                                const dayActivity = activityData.find(activity => activity.date === dateStr);
                                const isToday = dateStr === new Date().toISOString().split('T')[0];
                                const isCurrentMonth = date.getMonth() === new Date().getMonth();
                                
                                return (
                                    <div 
                                        key={i} 
                                        className={`calendar-cell ${isToday ? 'today' : ''} ${!isCurrentMonth ? 'other-month' : ''}`}
                                    >
                                        <span className="day-number">{date.getDate()}</span>
                                        {dayActivity && (
                                            <div className="activity-indicator">
                                                <span 
                                                    className="activity-dot"
                                                    style={{ backgroundColor: getActivityStatusColor(dayActivity.status) }}
                                                >
                                                    {getActivityIcon(dayActivity.status)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="recent-activity">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                        {activityData.slice(0, 8).map((activity, index) => (
                            <div key={index} className="activity-item">
                                <div className="activity-time">
                                    {activity.time}
                                </div>
                                <div className="activity-details">
                                    <div className="activity-status">
                                        <span 
                                            className="status-indicator"
                                            style={{ backgroundColor: getActivityStatusColor(activity.status) }}
                                        >
                                            {activity.status === 'checked_in' ? 'Checked In' : 'Checked Out'}
                                        </span>
                                    </div>
                                    <div className="activity-location">
                                        📍 {activity.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="parent-actions">
                <button className="action-btn primary">
                    📞 Contact Warden
                </button>
                <button className="action-btn secondary">
                    📧 Send Message
                </button>
                <button className="action-btn secondary">
                    📊 View Reports
                </button>
                <button className="action-btn secondary">
                    ⚙️ Settings
                </button>
            </div>
        </div>
    );
}

export default ParentUI;
