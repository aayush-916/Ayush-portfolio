import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../app.css'; // Import your CSS styles
import { FaUserTie } from 'react-icons/fa'; // Import a large icon from react-icons

const About = () => {
  // Spring animation for the icon
  const iconSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 200, friction: 20 },
    delay: 200,
  });

  // Spring animation for the text
  const textSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 25 },
    delay: 500,
  });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          {/* Animated Large Icon */}
          <animated.div style={iconSpring} className="about-icon">
            <FaUserTie size={180} color="#f39c12" /> {/* Large icon in place of image */}
          </animated.div>

          {/* Animated Text */}
          <animated.div style={textSpring} className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I’m a Full Stack Web Developer and Data Scientist with expertise in MERN stack, AI/ML, and Data Science. 
              I love building innovative applications and solving real-world problems through technology. 
              I'm passionate about creating seamless user experiences and bringing cutting-edge solutions to life.
            </p>
            <p>
              With strong skills in React.js, Node.js, Python, and various AI/ML frameworks, 
              I'm dedicated to developing impactful projects that deliver both functionality and beauty.
            </p>
            <button className="btn">Learn More</button>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default About;
