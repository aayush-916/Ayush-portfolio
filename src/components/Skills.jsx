import React from 'react';
import '../App.css'; // Import the CSS for styling
import { FaPython, FaReact, FaNodeJs, FaJava, FaDatabase, FaJsSquare, FaCuttlefish, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiFlask, SiDjango, SiTensorflow, SiNumpy, SiPandas, SiPowerbi, SiMysql, SiSqlite, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {/* Technology Skills */}
          <div className="skill-item">
            <FaReact size={60} className="skill-icon" />
            <h3>React.js</h3>
          </div>
          <div className="skill-item">
            <FaPython size={60} className="skill-icon" />
            <h3>Python</h3>
          </div>
          <div className="skill-item">
            <FaNodeJs size={60} className="skill-icon" />
            <h3>Node.js</h3>
          </div>
          <div className="skill-item">
            <FaJsSquare size={60} className="skill-icon" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-item">
            <FaCuttlefish size={60} className="skill-icon" />
            <h3>C/C++</h3>
          </div>
          <div className="skill-item">
            <FaJava size={60} className="skill-icon" />
            <h3>Java</h3>
          </div>

          {/* AI/ML and NLP */}
          <div className="skill-item">
            <SiTensorflow size={60} className="skill-icon" />
            <h3>AI/ML (TensorFlow)</h3>
          </div>
          <div className="skill-item">
            <FaPython size={60} className="skill-icon" />
            <h3>NLP (Flask & Spacy)</h3>
          </div>

          {/* Tools */}
          <div className="skill-item">
            <SiFlask size={60} className="skill-icon" />
            <h3>Flask</h3>
          </div>
          <div className="skill-item">
            <SiDjango size={60} className="skill-icon" />
            <h3>Django</h3>
          </div>
          <div className="skill-item">
            <SiNumpy size={60} className="skill-icon" />
            <h3>NumPy</h3>
          </div>
          <div className="skill-item">
            <SiPandas size={60} className="skill-icon" />
            <h3>Pandas</h3>
          </div>

          {/* Databases */}
          <div className="skill-item">
            <SiMysql size={60} className="skill-icon" />
            <h3>MySQL</h3>
          </div>
          <div className="skill-item">
            <SiSqlite size={60} className="skill-icon" />
            <h3>SQLite</h3>
          </div>
          <div className="skill-item">
            <SiMongodb size={60} className="skill-icon" />
            <h3>MongoDB</h3>
          </div>

          {/* Other Tools */}
          <div className="skill-item">
            <SiPowerbi size={60} className="skill-icon" />
            <h3>Power BI</h3>
          </div>
          <div className="skill-item">
            <SiNextdotjs size={60} className="skill-icon" />
            <h3>Next Js</h3>
          </div>
          <div className="skill-item">
            <FaHtml5 size={60} className="skill-icon" />
            <h3>HTML</h3>
          </div>
          <div className="skill-item">
            <FaCss3Alt size={60} className="skill-icon" />
            <h3>CSS</h3>
          </div>
          <div className="skill-item">
            <SiTailwindcss size={60} className="skill-icon" />
            <h3>Tailwind CSS</h3>
          </div>
          <div className="skill-item">
            <FaBootstrap size={60} className="skill-icon" />
            <h3>Bootstrap</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
