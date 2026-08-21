import React from "react";
import "./cssStyles/Profile.css";
import profileImage from "../Assets/profile-image.png";


const Profile = () => {
    return (
        <section className="profile-section">
            <div className="profile-content">
                <div className="profile-text">
                    <h1>Hi, I'm Justine Lusung</h1>
                    <h2>Computer Science Graduate | Aspiring QA Analyst</h2>
                    <p>
                        Recent Computer Science graduate with a strong interest in software quality, testing, and secure system design.
                        Experienced in manually testing and debugging full-stack systems, including web-based dashboards and backend services.
                        Detail-oriented and methodical, with a growing focus on QA processes, bug tracking, and building reliable, well-tested software.
                        Eager to apply this mindset professionally while continuing to grow technically.
                    </p>
                </div>
                <div className="profile-image">
                    <img src={profileImage} alt="Justine Lusung" />
                </div>
            </div>
        </section>
    );
};

export default Profile;
