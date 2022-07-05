import React from 'react'
import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar() {
  return (
    <div className='topbar' id='topbar'>
      <div className="wrapper">
      <div className="left">
        <a href="#intro" className='logo'>abyCode.</a>
        <div className="itemContainer">
          <PersonIcon />
        </div>
      </div>
      <div className="right"></div>
      </div>   
    </div>
  )
}
 