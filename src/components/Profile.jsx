import React from "react";
import "./cssStyles/Profile.css";
import profileImage from "../Assets/profile-image.png";


const Profile = () => {
    return (
        <section className="profile-section">
            <div className="profile-content">
                <div className="profile-text">
                    <h1>Hi, I'm Justine Lusung</h1>
                    <h2>Computer Science Student</h2>
                    <p>
                        Recent Computer Science graduate with a strong interest in data management, cloud technologies,
                        and secure system design. Passionate about building reliable, scalable, and efficient technology
                        solutions that support organizational objectives. Eager to apply academic knowledge,
                        technical skills, and continuous learning in a professional environment while contributing
                        to meaningful projects and team success.
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
