import React, { useState } from "react";
import "../components/cssStyles/Projects.css";
import CCNAv7 from "../Assets/CCNAv7-Introduction to Networks.png";
import stud_congress from "../Assets/Cisco Networking Academy Student Congress 2026.png";
import Cyber_threat from "../Assets/Cyber-Threat-Management.png";
import Cybersecurity from "../Assets/Cybersecurity Essential.png";
import Presenting_data from "../Assets/Presenting Data.png";
import PDW from "../Assets/Professional Development Workshop.png";
import PNCG from "../Assets/Professional Networking for Career Growth.png";



const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const projectList = [
        {
            title: "SafeHouse",
            role: "Project Manager",
            description:
                "Developed SafeHouse, an IoT-based home security system using FaceNet facial recognition and City Block Distance for accurate identification. Integrated real-time alerts, activity logging, and hybrid local–cloud storage for continuous monitoring and user accessibility.",
        },
        {
            title: "Skills-Based Badge Exam System",
            role: "Front-End Developer",
            description:
                "Built a web-based platform using React.js and Node.js to track employee attendance and skill performance, featuring a dashboard for reports and user control.",
        },
    ];

    const certifications = [
        {
            title: "CCNAv7: Introduction to Networks",
            date: "Oct 2, 2024",
            issuer: "CISCO Networking Academy",
            image: CCNAv7
        },
        {
            title: "Cybersecurity Essentials ",
            date: "Oct 2, 2024",
            issuer: "CISCO Networking Academy",
            image: Cybersecurity
        },
        {
            title: "Cyber Threat Management Course",
            date: "Oct 29, 2024",
            issuer: "CISCO Networking Academy",
            image: Cyber_threat
        },
        {
            title: "Professional Development Workshop",
            date: "Jan 8, 2026",
            issuer: "Career and Placement Office",
            image: PDW
        },
        {
            title: "Cisco Networking Academy Student Congress 2026",
            date: "Jan 8, 2026",
            issuer: "CISCO Networking Academy-Ph",
            image: stud_congress
        },
        {
            title: "Presenting Data",
            date: "Feb 19, 2026",
            issuer: "HP Life",
            image: Presenting_data
        },
        {
            title: "Professional Networking for Career Growth",
            date: "Feb 20, 2026",
            issuer: "HP Life",
            image: PNCG
        },
        {
            title: "Relational Database",
            date: "Mar 13, 2026",
            issuer: "freeCodeCamp",
            image: PNCG
        }
    ]

    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">Projects and Certifications</h2>

            <h3 className="sub-title">Projects</h3>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h4>{project.title}</h4>
                        <h5>{project.role}</h5>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <h3 className="sub-title">Certifications</h3>
            <div className="certifications-container">
                {certifications.map((cert, index) => (
                    <div
                        className="cert-card"
                        key={index}
                        onClick={() => setSelectedImage(cert.image)}
                        style={{ cursor: "pointer" }}
                    >
                        <h4>{cert.title}</h4>
                        <p>{cert.issuer} | {cert.date}</p>
                    </div>
                ))}
            </div>
            {/* MODAL FOR VIEWING THE IMAGE */}
            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Certification" />
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
