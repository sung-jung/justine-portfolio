// src/components/Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
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
        alert("Message sent! (You can connect this form to EmailJS later.)");
        setFormData({ name: "", email: "", message: "" });
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
<<<<<<< HEAD
                <a href="https://drive.google.com/file/d/1CziGEX7LnzYfz73oizEyuJzaRhbzcFNX/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
=======
                <a href="https://drive.google.com/file/d/1k7r4OTR3bzwzHeFHpzf94Lu4fEnmpzW7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
>>>>>>> master
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
