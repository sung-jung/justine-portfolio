// src/components/Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../components/cssStyles/Contacts.css";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,     // from EmailJS
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY      // from EmailJS
        )
            .then(() => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Email error:", error);
                alert("Failed to send message.");
            });
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p className="contact-description">
                I’d love to hear from you! Whether you have a question, opportunity, or just want to say hi —
                feel free to drop a message below.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>

            <div className="contact-links">
                <a href="https://justinelusung.jobs180.com/" target="_blank" rel="noopener noreferrer">
                    <FaFileAlt /> View Resume
                </a>
                <a href="mailto:mendoza262003@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope /> Email
                </a>
                <a href="https://github.com/sung-jung" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/justine-lusung-b08941394/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Contact;

