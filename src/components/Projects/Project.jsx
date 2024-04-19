import React from 'react';
import './project.css';
import ecommerce from '../../assets/ecommerce.png';
import medical from '../../assets/medical.png';
import crop from '../../assets/crop.png';
import snake from '../../assets/snake.png';

export default function Project() {
  return (
    <section id='project'> 
        <h2 className='projectTitle'>My Projects</h2>
        <div className='projectImgs'>
            <div className='projectInfo'>
                <img src={medical} alt='' className='projectImg' />
                <p>Medical Insurance Price Prediction</p>
                <div className='projectDesc'>I developed a Medical Insurance Price Prediction system, incorporating statistical and visual analysis techniques, achieving high accuracy <br/> Technologies Used :  Python, Machine learning and its libraries</div>
            </div>
            <div className='projectInfo'>
                <img src={ecommerce} alt='' className='projectImg' />
                <p>E-Commerce Website</p>
                <div className='projectDesc'>I created an interactive E-Commerce Website for clothing <br/> Technologies Used : React,  MongoDb, Node js , Stripe,Express,Clodinary</div>
            </div>
            <div className='projectInfo'>
                <img src={crop} alt='' className='projectImg' />
                <p>Crop Yield Prediction of Indian States Using Machine Learning</p>
                <div className='projectDesc'>I implemented a Crop Yield Prediction system for Indian states utilizing Machine Learning methodologies <br/> Technologies Used :  Python, Machine learning and its libraries</div>
            </div>  
            <div className='projectInfo'>
                <img src={snake} alt='' className='projectImg' />
                <p>Snake Game</p>
                <div className='projectDesc'>I designed and developed a classic Snake Game using Java and Swing<br/> Technologies Used : Java & Swing</div>
            </div>
        </div>
    </section>
  );
}
