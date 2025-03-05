import React, { useState, useEffect } from 'react';
import '../styles/Notification.css';

const Notification = ({ message, type, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div className={`notification ${type}`}>
            <div className="notification-content">
                {message}
                <button onClick={() => setIsVisible(false)}>×</button>
            </div>
        </div>
    );
};

export default Notification;