import React from 'react'
import './intro.css';
import MyImg from '../../assets/myImg2.jpeg';
import { Link } from 'react-scroll';
import hire from '../../assets/hire.png';

export default function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I'm <span className='introName'>Vaishnavi Dhare</span><br/>Website Designer</span>
            <p className='introPara'>I am an energetic and dedicated entry-level developer with a fervent passion for<br/> the IT field. My strong
                leadership skills, positive mindset, and proactive approach<br/> make me well-suited for tackling challenges.
                Proficient in decision-making and<br/> effective communication, I am committed to continuous learning and
                leveraging<br/> my skills to make a positive impact in the ever-evolving world of technology. </p>
            <Link><button className='btn'><img src={hire} alt='' className='hireBtn' />Hire Me</button></Link>
        </div>
        <img src={MyImg} alt='Profile' className='myImg'/>
    </section>
  )
}
