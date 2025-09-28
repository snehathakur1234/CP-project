import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../util';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear all stored data
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('userRole');
        
        handleSuccess('Logged out successfully');
        
        // Redirect to login
        setTimeout(() => {
            navigate('/Login');
        }, 1000);
    };

    return (
        <button 
            onClick={handleLogout}
            className="logout-btn"
            style={{
                background: 'linear-gradient(45deg, #dc2626, #ef4444)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}
        >
            🚪 Logout
        </button>
    );
}

export default Logout;
