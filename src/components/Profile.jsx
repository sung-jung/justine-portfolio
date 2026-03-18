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
                        I am passionate about database administration, focusing on managing, securing,
                        and optimizing data systems to ensure reliability and efficiency.
                        I am interested in working with databases, cloud platforms,
                        and data security practices to build robust, scalable, and well-structured systems
                        that support accurate data management and organizational decision-making.
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
