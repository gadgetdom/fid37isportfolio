import React, { useReducer, useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactSection.css';
import Notification from './Notification';

// Initial state for the form
const initialState = {
    name: '',
    email: '',
    phone: '',
    company: '',
    messageTitle: '',
    messageBody: ''
};

// Reducer function to manage form state
const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

const ContactSection = () => {
    const [formData, dispatch] = useReducer(formReducer, initialState);
    const [notification, setNotification] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handles input change and updates state
    const handleChange = (e) => {
        dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
    };

    // Check if required fields are filled
    const isFormValid = () => {
        const requiredFields = ['name', 'email', 'messageTitle', 'messageBody'];
        return requiredFields.every(field => formData[field].trim() !== '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            setNotification({ message: 'Please fill in all required fields.', type: 'error' });
            return;
        }

        setLoading(true);

        const SERVICE_ID = 'service_mg74hrj';
        const TEMPLATE_ID = 'template_k7j82vo';
        const USER_ID = 'xOsdfU1dwZUO7GBBw';

        // Ensure all form data is passed correctly to EmailJS
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || 'N/A', 
            company: formData.company || 'N/A',
            messageTitle: formData.messageTitle,
            messageBody: formData.messageBody
        };

        console.log("Sending data to EmailJS:", templateParams); 
        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
            console.log('SUCCESS!', response.status, response.text);

            setNotification({ message: 'Message sent successfully!', type: 'success' });
            dispatch({ type: 'RESET_FORM' }); // Reset form fields
        } catch (err) {
            console.error('FAILED...', err);
            setNotification({ message: 'Failed to send message. Please try again.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section">
            {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}

            <div className="contact-info">
                <h1>Contact Information</h1>
                <div className="contact-details">
                    <div>
                        <h3>Emails</h3>
                        <p>Professional: agbaphydelis@outlook.com</p>
                        <p>Personal: phyd3lis@gmail.com</p>
                    </div>
                    <div>
                        <h3>Phone Numbers</h3>
                        <p>Mobile: +234 (808) 595-2266</p>
                        <p>Work: +234 (703) 826-4911</p>
                    </div>
                    <div>
                        <h3>Address:</h3>
                        <p>Asaba, Delta State, Nigeria</p>
                        <p>320102</p>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <h1>Send Me a Message</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid">
                        <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="grid">
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
                    </div>
                    <input type="text" name="messageTitle" placeholder="Message Subject" value={formData.messageTitle} onChange={handleChange} required />
                    <textarea name="messageBody" placeholder="Your Message *" value={formData.messageBody} onChange={handleChange} required />
                    <button type="submit" disabled={!isFormValid() || loading} className={!isFormValid() ? 'disabled' : ''}>
                        {loading ? <span className="spinner"></span> : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
