import React from "react";
import "./cssStyles/Profile.css";
import profileImage from "../Assets/barong.JPG";


const Profile = () => {
    return (
        <section className="profile-section">
            <div className="profile-content">
                <div className="profile-text">
                    <h1>Hi, I'm Justine Lusung</h1>
                    <h2>Computer Science Graduate</h2>
                    <p>
                        Recent Computer Science graduate pursuing an IT support role. Skilled in Windows, Microsoft 365,
                        networking fundamentals, and methodical troubleshooting, with a habit of documenting issues clearly.
                        Eager to support users and keep learning new tools and processes.
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
