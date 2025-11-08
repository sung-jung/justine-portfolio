import React from "react";
import "./cssStyles/Profile.css";
import profileImage from "../Assets/profile-image.png";

const Profile = () => {
    return (
        <section className="profile-section">
            <div className="profile-content">
                <div className="profile-text">
                    <h1>Hi, I'm Justine Lusung</h1>
                    <h2>Computer Science Student & Aspiring System Administrator</h2>
                    <p>
                        I’m passionate about exploring IoT, cloud computing, and cybersecurity
                        to build secure and efficient systems that make technology more accessible
                        and dependable.
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
