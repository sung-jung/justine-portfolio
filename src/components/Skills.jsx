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
                        <li>System Installation & Configuration</li>
                        <li>Network Setup and Troubleshooting</li>
                        <li>IoT Integration</li>
                        <li>React.js & React Native Development</li>
                        <li>Node.js & Express.js Backend Development</li>
                        <li>Cloud Deployment (Vercel, Supabase)</li>
                        <li>Basic Cybersecurity Awareness</li>
                        <li>Version Control (Git, GitHub)</li>
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
                        <li>Initiative & Self-Motivation</li>
                        <li>Critical Thinking</li>
                        <li>Project Coordination</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
