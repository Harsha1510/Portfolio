import React from "react";
import "../Styles/Landingpage.css";
import { Link } from "react-router-dom";

const LandingPage = () => (
    <>
  <div className="container">
    {/* Left Side - Intro Section */}
    <div className="left">
      <div className="intro">
        <h3>Hi, I am</h3>
        <h1>Harsha Dorapalli</h1>
        <h4>Full-Stack Developer</h4>
        <div className="socials">
          <a href="mailto:dorapalliharsha@email.com" title="Email" target="_blank" rel="noopener noreferrer">@</a>
          <a href="https://github.com/Harsha1510" title="GitHub" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor">
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 
              1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.7.8 1.7-.8 1.4-2.1 1-2.6.8-.1-.6-.3-1-.6-1.2-2.7-.3-5.5-1.3-5.5-5.7 
              0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2
              .6 1.6.2 2.8.1 3.1.7.9 1.2 1.9 1.2 3.2 0 4.4-2.8 5.4-5.5 5.7.3.3.6.8.6 1.6v2.3c0 .3.2.7.8.6A12 
              12 0 0 0 12 .3"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/harsha616/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="currentColor">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 
              5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 
              0-1.7-.8-1.7-1.7s.7-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.7 
              1.7-1.7 1.7zm13.5 10.3h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.7 
              1.2-1.7 2.4v4.6h-3v-9h2.8v1.2h.1c.4-.7 1.3-1.5 
              2.7-1.5 2.9 0 3.4 1.9 3.4 4.3v5z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Right Side - Navigation and Profile */}
    <div className="right">
      <nav className="nav">
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <Link to="/resume" className="resume-link">Resume</Link>
      </nav>
      <img src="./Public/Profile.jpg" alt="Profile" className="profile-img" />
    </div>
  </div>

    <div id="about" className="about-section">
        <h2>About Me</h2>
        <p>
            I'm a Full Stack Developer skilled in ReactJS, NodeJS, ExpressJS, and MongoDB. 
            I’ve built full-stack web apps and solved 350+ coding problems across platforms. 
            Passionate about frontend and clean, efficient code.
        </p>
    </div>

    <div id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project-card">
            <h3>Employee Payroll System</h3>
            <ul>
            <li>ReactJS, ExpressJS, MongoDB</li>
            <li>Automated payroll for 100+ employees</li>
            <li>Reduced errors by 90% and built 10+ APIs</li>
            </ul>
        </div>

        <div className="project-card">
            <h3>MNIST Digit Recognition</h3>
            <ul>
            <li>99.2% accuracy with 6-layer CNN</li>
            <li>Prediction in &lt;100ms, optimized for TensorFlow.js</li>
            </ul>
        </div>

        <div className="project-card">
            <h3>Grocify – Online Grocery App</h3>
            <ul>
            <li>ReactJS app with responsive design</li>
            <li>Checkout flow reduced cart abandonment by 40%</li>
            </ul>
        </div>
    </div>

    <div id="skills" className="skills-section" data-aos="fade-up">
  <div className="skills-content">
    <div className="skills-left">
      <h2>Skills</h2>

      <div className="skill-block">
        <h4>Languages</h4>
        <p>C, C++, Java, Python, JavaScript, SQL</p>
      </div>

      <div className="skill-block">
        <h4>Technologies</h4>
        <p>ReactJS, NodeJS, ExpressJS, Bootstrap</p>
      </div>

      <div className="skill-block">
        <h4>Tools & Databases</h4>
        <p>Git, GitHub, MongoDB, Mongoose, MySQL, Pandas, NumPy</p>
      </div>
    </div>

    <div className="skills-right">
      <img src="./Public/skills.png" alt="Skills" className="skills-img" />
    </div>
  </div>
</div>


    
<div className="footer">
  <p>&copy; 2025 Harsha's Portfolio. All rights reserved.</p>
</div>

</>
);

export default LandingPage;
