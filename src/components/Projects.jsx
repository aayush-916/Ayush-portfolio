import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projects = [
  {
    title: "Website for Security Systems Company",
    description: "Designed and developed a responsive full-stack website for a security company using React, Express, and SQLite, deployed on Netlify and Render. Features include API integration, a CI/CD pipeline, and a secure Admin Page. . Ensured compatibility across devices, optimizing the site for performance and SEO.",
    imgSrc: "/image/btc.png",
    link: "https://balajitradingcompany.netlify.app/"
  },
  {
    title: "E-commerce Like website",
    description: "Developed a responsive e-commerce website using HTML, CSS, JavaScript, and Flask for the backend. Integrated SQLite3 for database management and built a user-friendly admin panel. Deployed on Render for accessibility and reliability. Currently enhancing with Generative AI features to improve user experience.",
    imgSrc: "image/om.png",
    link: "https://om-printers-flask-1.onrender.com/"
  },
  {
    title: "Anime Recommendation System",
    description: "Developed a content-based anime recommendation system using Python, Flask, spaCy, and TF-IDF vectorization. Leveraged natural language processing (NLP) to analyze anime synopses and genres, ensuring precise recommendations. Implemented cosine similarity to calculate and generate relevant recommendations based on content features.",
    imgSrc: "image/anime.png",
    link: "https://github.com/aayush-916/Anime-Recommendation-System"
  },
  {
    title: "Android Educational App",
    description: "Built an Android app using Kotlin and Firebase to guide students in computer science fields. Provided real-time insights and resource recommendations through a user-friendly interface. Followed best practices in software design and optimized performance with testing and debugging.",
    imgSrc: "/image/app.jpeg",
    link: "https://github.com/aayush-916/Android-App"
  },
  {
    title: "Instagram/YouTube Videos Downloader",
    description: "A user-friendly web tool built with Python and Flask that allows you to quickly download Instagram Reels and YouTube videos. Enjoy seamless downloading in just a few clicks, without any hassle!",
    imgSrc: "/image/real.png",
    link: "https://github.com/aayush-916/Instagram-Reels-YouTube-Videos-Downloader-"
  },
  {
    title: "Sales Analysis Dashboard",
    description: "Designed and developed a comprehensive sales performance dashboard using Power BI, supported by robust data cleaning, processing, and feature engineering techniques in Python (Pandas, NumPy). ",
    imgSrc: "/image/sales.png",
    link: "https://github.com/aayush-916/Data-Analysis-projects"
  }
];

const Projects = () => {
  return (
    <section id='project' className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={project.imgSrc} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
