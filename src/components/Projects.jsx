import React from "react";
import "../components/cssStyles/Projects.css";

const Projects = () => {
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
            link: "https://drive.google.com/file/d/1xzsowDdfh7rMzYt2QJ3Fp6gGkbpCmf-_/view?usp=drive_link"
        },
        {
            title: "Cybersecurity Essentials ",
            date: "Oct 2, 2024",
            issuer: "CISCO Networking Academy",
            link: "https://drive.google.com/file/d/1Z_kA6Eo6hh0pCa_h7oLJGT9CMdo2u7E-/view?usp=drive_link"
        },
        {
            title: "Cyber Threat Management Course",
            date: "Oct 29, 2024",
            issuer: "CISCO Networking Academy",
            link: "https://drive.google.com/file/d/1X8HVIanpRDgRVxWO9u4_ng3mX2KwHu8b/view?usp=drive_link"
        },
        {
            title: "Professional Development Workshop",
            date: "Jan 8, 2026",
            issuer: "Career and Placement Office",
            link: "https://drive.google.com/file/d/1HHHIHpE3sb1h9FXI88JY71pDBcLqarBZ/view?usp=sharing"
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
                    <div className="cert-card" key={index}>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <h4>{cert.title}</h4>
                            <p>{cert.issuer} | {cert.date}</p>
                        </a>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Projects;
