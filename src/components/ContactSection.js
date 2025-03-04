import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        messageTitle: '',
        messageBody: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these with your actual EmailJS credentials
        const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
        const USER_ID = 'YOUR_EMAILJS_USER_ID';

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
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
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <section className="contact-section flex flex-col md:flex-row justify-between p-8 bg-gray-100">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="contact-info w-full md:w-1/2 mb-6 md:mr-8"
            >
                <h1 className="text-3xl font-bold mb-6">Contact Information</h1>
                <div className="contact-details space-y-4">
                    <div>
                        <h3 className="font-semibold">Emails</h3>
                        <p>Professional: your.professional.email@example.com</p>
                        <p>Personal: your.personal.email@example.com</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Phone Numbers</h3>
                        <p>Mobile: +1 (123) 456-7890</p>
                        <p>Work: +1 (987) 654-3210</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Current Location</h3>
                        <p>City, State, Country</p>
                        <p>Zip/Postal Code</p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="contact-form w-full md:w-1/2"
            >
                <h1 className="text-3xl font-bold mb-6">Send Me a Message</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <input
                        type="text"
                        name="messageTitle"
                        placeholder="Message Title"
                        value={formData.messageTitle}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        name="messageBody"
                        placeholder="Your Message"
                        value={formData.messageBody}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full p-2 border rounded"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default ContactSection;