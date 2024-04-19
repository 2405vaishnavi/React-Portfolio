import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  const [showMenu,setShowMenu] = useState(false);

  return (
    <div>
        <nav>
        <img className='logo' src={logo} alt='logo' />
        <div className="desktopMenu">
            <a activeClass= 'active' href ='#intro' spy = {true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>Home</a>
            <a activeClass= 'active' href ='#skills' spy = {true} smooth={true} offset={-50} duration={500} className='desktopMenuList'>About</a>
            <a activeClass= 'active' href ='#project' spy = {true} smooth={true} offset={-50} duration={500} className='desktopMenuList'>Project</a>
            <a activeClass= 'active' href ='#exp' spy = {true} smooth={true} offset={-50} duration={500} className='desktopMenuList'>Experience</a>
        </div>
        <button className='desktopBtn' onClick={() => {
          document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contact} alt='contact' className='desktopImg'/>Contact Me
        </button>

        <FontAwesomeIcon icon={faBars} className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display : showMenu ? 'flex' : 'none'}}>
            <a activeClass= 'active' href ='#intro' spy = {true} smooth={true} offset={-100} duration={500} className='MobMenuList' onClick={() => setShowMenu(false)}>Home</a>
            <a activeClass= 'active' href ='#skills' spy = {true} smooth={true} offset={-50} duration={500} className='MobMenuList' onClick={() => setShowMenu(false)}>About</a>
            <a activeClass= 'active' href ='#project' spy = {true} smooth={true} offset={-50} duration={500} className='MobMenuList' onClick={() => setShowMenu(false)}>Project</a>
            <a activeClass= 'active' href ='#exp' spy = {true} smooth={true} offset={-50} duration={500} className='MobMenuList' onClick={() => setShowMenu(false)}>Experience</a>
            <a activeClass= 'active' href ='#contactPage' spy = {true} smooth={true} offset={-50} duration={500} className='MobMenuList' onClick={() => setShowMenu(false)}>Contact</a>
        </div>
        </nav>
    </div>
  )
}
