import React from 'react';
import '../App.css'; // Import the CSS for styling

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-date">2022 - 2025</div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/image/aku.webp" alt="XYZ University" />
              </div>
              <div className="timeline-text">
                <h3>Bachelor of Computer Applications</h3>
                <p>Aryabhatta knowledge University Patna</p>
                <p>Specialized in Full Stack Web Development and Data Science</p>
                <br></br>
                <h4>CGPA : 8+</h4>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2018 - 2020</div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/image/kvm.jpg" alt="ABC Senior Secondary School" />
              </div>
              <div className="timeline-text">
                <h3>Intermediate(12th)</h3>
                <p>Kendriya Vidyalaya Mashrak</p>
                <p>Management Stream with a Focus on Computer Science</p>
                 <p> • Scored an outstanding 99/100 in Management</p>
                  <p> • Achieved an excellent 97/100 in Computer Science</p>
                <br></br>
                <h4> Percentage : 87% </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
