import { useState } from 'react'
import '../App.css'

function Nav() {
  const [toggle, settoggle] = useState(false)
  const handelclick = ()=> {
    settoggle(!toggle)
  }
  const bodyclick = ()=>{
    if(toggle){
      settoggle(!toggle)
    }
  }
  //http://localhost:5173/
  return (
    <>
    <div id='fix' className="fix">
      <nav className={`na ${toggle ? 'mna' : ''}`}>
        <div className='hd'>
        <h3 className='brand'>Ayush Kumar</h3>
        <h3 className='menu' onClick={handelclick}>☰</h3>
        </div>
        <ul className={`ull ${toggle ? 'active' : ''}`}>
          <li><a href='#home' onClick={bodyclick}>Home</a></li>
          <li><a href='#about' onClick={bodyclick}>About</a></li>
          <li><a href='/web_developer.pdf' onClick={bodyclick}>Resume</a></li>
          <li><a href='#project' onClick={bodyclick}>projects</a></li>
          <li><a href='#footer' onClick={bodyclick}>Contact</a></li>
        </ul>
        
      </nav>
    </div>
    </>
  )
}

export default Nav
