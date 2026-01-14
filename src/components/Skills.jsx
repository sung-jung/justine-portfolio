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
                        <li>Troubleshooting</li>
                        <li>IoT Device Integration</li>
                        <li>React (Basic Proficiency)</li>
                        <li>MySQL & Excel</li>
                        <li>Cloud Deployment (Vercel, Supabase)</li>
                        <li>Basic Cybersecurity Practices</li>
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
                        <li>Critical Thinking</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
