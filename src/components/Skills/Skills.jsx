import React from 'react';
import './skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import java from '../../assets/java.png';
import react from '../../assets/react.png';
import sql from '../../assets/sql.png';
import python from '../../assets/python.png';
import pandas from '../../assets/pandas.png';
import numpy from '../../assets/numpy.png';
import sklearn from '../../assets/sklearn.png';
import matplotlib from '../../assets/matplotlib.png';
import mysql from '../../assets/mysql.png';
import oracle from '../../assets/oracle.png';
import mongoDb from '../../assets/mongodb.png';

export default function Skills() {
  return (
    <section id='skills'>
        <h2 className='skillTitle'>What I know</h2>
        <span className='skillDesc'>I know various langauge and framework such as</span>
        <h3 className='head'>Languages</h3>
        <div className='skills'>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={html} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Html</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={css} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Css</h2>
                    </div>
                </div>
            </div>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={java} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Java</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={python} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Python</h2>
                    </div>
                </div>             
            </div>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={js} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>JS</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={sql} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>SQL</h2>
                    </div>
                </div>                            
            </div>
        </div>
        <h3 className='head'>Framework & Libraries</h3>
        <div className='skills'>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={react} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>React</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={numpy} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Numpy</h2>
                    </div>
                </div>
            </div>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={pandas} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Pandas</h2>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={matplotlib} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Matplotlib</h2>
                    </div>
                </div>             
            </div>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={sklearn} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Sklearn</h2>
                    </div>
                </div>                          
            </div>
        </div>
        
        <h3 className='head'>Databases</h3>
        <div className='skills'>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={mysql} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>MySQL</h2>
                    </div>
                </div>
            </div>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={oracle} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Oracle</h2>
                    </div>
                </div>          
            </div>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={mongoDb} alt='html' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>MongoDB</h2>
                    </div>
                </div>                          
            </div>
        </div>
        <h3 className='head'>Soft Skills</h3>
            <div className='SoftskillBarText'>
                <p>Data Analysis</p>
                <p>Leadership</p>
                <p>Empathy</p>
                <p>Adaptability</p>
                <p>Problem Solving</p>
                <p>Hard Working</p>
                <p>Motivated</p>
                <p>Communication</p>
                <p>Team Collaboration</p>        
            </div>
    </section>
  )
}
