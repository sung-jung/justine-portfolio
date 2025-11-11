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

    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <h4>{project.role}</h4>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
