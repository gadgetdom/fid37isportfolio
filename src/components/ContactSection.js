import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactSection.css';
import Notification from './Notification';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        messageTitle: '',
        messageBody: ''
    });

    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const isFormValid = () => {
        const requiredFields = ['name', 'email', 'messageTitle', 'messageBody'];
        return requiredFields.every(field => formData[field].trim() !== '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!isFormValid()) {
            setNotification({
                message: 'Please fill in all required fields.',
                type: 'error'
            });
            return;
        }

        // Replace these with your actual EmailJS credentials
        const SERVICE_ID = 'service_mg74hrj';
        const TEMPLATE_ID = 'template_k7j82vo';
        const USER_ID = 'YOUR_EMAILJS_USER_ID';

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success notification
                setNotification({
                    message: 'Message sent successfully!',
                    type: 'success'
                });

                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    messageTitle: '',
                    messageBody: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
                
                // Show error notification
                setNotification({
                    message: 'Failed to send message. Please try again.',
                    type: 'error'
                });
            });
    };

    return (
        <section className="contact-section">
            {/* Notification component */}
            {notification && (
                <Notification 
                    message={notification.message} 
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}

            <div className="contact-info">
                <h1>Contact Information</h1>
                <div className="contact-details">
                    <div>
                        <h3>Emails</h3>
                        <p>Professional: your.professional.email@example.com</p>
                        <p>Personal: your.personal.email@example.com</p>
                    </div>
                    <div>
                        <h3>Phone Numbers</h3>
                        <p>Mobile: +1 (123) 456-7890</p>
                        <p>Work: +1 (987) 654-3210</p>
                    </div>
                    <div>
                        <h3>Current Location</h3>
                        <p>City, State, Country</p>
                        <p>Zip/Postal Code</p>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <h1>Send Me a Message</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="grid">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="text"
                        name="messageTitle"
                        placeholder="Message Title *"
                        value={formData.messageTitle}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="messageBody"
                        placeholder="Your Message *"
                        value={formData.messageBody}
                        onChange={handleChange}
                        required
                    />
                    <button 
                        type="submit" 
                        disabled={!isFormValid()}
                        className={!isFormValid() ? 'disabled' : ''}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;