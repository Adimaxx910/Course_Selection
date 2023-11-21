import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import '../Components/Styles/contact.css'
function ContactUs() {
    return (
      <>
        <Header />
        <div className="contact-container">
          <div className="left-content">
            <div className="profile-photo">
              <img src="ben10.jpg" alt="Profile" />
            </div>
            <div className="contact-details">
              <h3>Contact Details:</h3>
              <p>Email: ganigaadithya3@gmail.com</p>
              <p>Phone: +91 8296305026</p>
              <p>Location: Bangalore, India</p>
            </div>
          </div>
          <div className="right-content">
            <h2>About Me</h2>
            <p>
              Welcome to my colorful resume! I am a passionate and skilled professional with expertise in web development. I enjoy crafting beautiful and efficient solutions that make a positive impact.
            </p>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>HTML5 | CSS</li>
              <li>JAVA | C#</li>
              <li>.NET CORE | ASP .NET</li>
             
            </ul>
            <h2>Achievements</h2>
            <p>Received "Web Developer of the Year" award in 2022.</p>
            <h2>Goals</h2>
            <p>Continuously learn and grow in the ever-evolving field of web development.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
export default ContactUs;
