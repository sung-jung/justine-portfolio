import React from "react";
import "./cssStyles/Skills.css";

const Skills = () => {
    return (
        <section className="skills-section">
            <h2 className="skills-title">Skills</h2>

            <div className="skills-container">
                <div className="skills-category">
                    <h3>💻 Technical Skills</h3>
                    <ul>
                        <li>Windows OS Installation & Configuration</li>
                        <li>Microsoft 365 & Microsoft Excel</li>
                        <li>VBA Macros & Process Automation</li>
                        <li>SQL & PostgreSQL Fundamentals</li>
                        <li>Bash Scripting</li>
                        <li>Basic Network Setup & Troubleshooting</li>
                        <li>Git & GitHub</li>
                        <li>Basic Cybersecurity Practices</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3>🤝 Soft Skills</h3>
                    <ul>
                        <li>Analytical Thinking & Problem Solving</li>
                        <li>Attention to Detail</li>
                        <li>Adaptability & Willingness to Learn</li>
                        <li>Time Management & Organization</li>
                        <li>Team Collaboration & Communication</li>
                        <li>Process Improvement & Documentation</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
