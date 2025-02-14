import React from 'react';
import '../App.css'; // Import the CSS for styling

const Exp = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2> Experience </h2>
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-date">10/11/2024 - Present</div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/leafcode_logo.jpg" alt="XYZ University" />
              </div>
              <div className="timeline-text">
                <h3> <a href='https://leafcode.in' target="_blank"> Leafcode Technology</a></h3>
                <p>Founder & Full-Stack Developer</p>
                <br/>
                <p>- Established a web development agency, delivering 4 successful projects.</p>
                <p>- Developed websites and applications using React.js, Node.js, and modern web technologies.</p>
                <p>- Managed client acquisition, hosting, deployment, and SEO optimization.</p>
                <br></br>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">06/12/2024 - 10/02/2025</div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/career_logo.jpg" alt="XYZ University" />
              </div>
              <div className="timeline-text">
                <h3> <a href='https://www.careerbanao.org/' target="_blank">Career Banao </a> </h3>
                <p>Full Stack Developer Intern</p>
                <br/>
                <p>Developed dynamic components and features for the website using React.js and created RESTful APIs with </p>
                <p>Node.js/Express.js to enhance functionality and performance.</p>
                <br></br>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">10/07/2024 - 10/10/2024</div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/gunantita_logo.png" alt="XYZ University" />
              </div>
              <div className="timeline-text">
                <h3>  <a href='https://www.gunaatita.com/' target="_blank"> Gunaatita Technology Pvt Ltd </a> </h3>
                <p>Web Development Intern</p>
                <br/>
                <p>Assisted in developing web applications, enhancing user interfaces, and optimizing functionality using modern web technologies.</p>
                
                <br></br>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Exp;
