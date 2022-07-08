import React from 'react'
import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({setMenuOpen, menuOpen}) {
  return (
    <div className={`topbar ${menuOpen && "active"}`} id='topbar'>
      <div className="wrapper">
      <div className="left">
        <a href="#intro" className='logo'>abyCode.</a>
        <div className="itemContainer">
          <PersonIcon className="icon" />
          <span>+234 802 574 1187</span>
        </div>
        <div className="itemContainer">
          <EmailIcon className="icon"/>
          <span>dokun.abraham@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line1"></span>
          <span className="line1"> </span>
        </div>
      </div>
      </div>   
    </div>
  )
}
 