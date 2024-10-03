import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import '../App.css'

const Home = () => {
  return (
    <>
    <div id='home' className='home'>
        <div className="text">
            <h5>HELLO !</h5>
            <h1>I'm <span>Ayush</span></h1>
            
            <ReactTypingEffect
            text={['Web Developer 💻', 'Data Scientist 📊', 'AI/ML Engineer 🤖']}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
             className='type'
             />
        </div>
        <div className="bt">
            <a href='/web_developer.pdf' className='btn1'>RESSUME</a>
            <a href="https://github.com/aayush-916" className='btn2'>My work</a>
        </div>
        
    </div>
    </>
    
  )
}

export default Home