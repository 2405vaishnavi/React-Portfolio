import React from 'react'
import './experience.css';
import sureTrust from '../../assets/sureTrust.png';
import stop from '../../assets/1stop.png';

export default function Experience() {
  return (
    <section id='exp'>
        <h2 className='expTitle'>My Experience</h2>
        <div className='expContent'>
            <img className='expImgs' src={sureTrust} alt='' />
            <div className='expDesc'>
                <span className='expName'>Sure Trust</span>
                <h2>Project Name : Hospital Management System</h2>
                <p>Duration : 6 months (May 2023- Oct 2023)</p>
                <p>Technologoies Used: Html, CSS, JavaScript, React, Java, SpringBoot, MySQL</p>
                <p>I've developed a pharmacy module within the hospital management system, covering both frontend and backend functionalities. The frontend was built using React, HTML, and JavaScript, while the backend was implemented using Spring Boot. MySQL serves as the database backend for storing and managing data.</p>
                <a href='https://www.linkedin.com/posts/vaishnavi-dhare-145810249_internship-suretrust-hospitalmanagementsystem-activity-7172804266590507008-Xl0T?utm_source=share&utm_medium=member_desktop'>View Certificate</a>
            </div>
        </div>
        <div className='expContent'>
            <img className='expImgs' src={stop} alt='' />
            <div className='expDesc'>
                <span className='expName'>1Stop</span>
                <h2>Project Name : Employee Management System</h2>
                <p>Duration : 2 months (Feb 2024 - March 2024)</p>
                <p>Technologoies Used: Html, CSS, JavaScript, React, Java, SpringBoot, MySQL</p>
                <p>I've created an employee management system, covering both frontend and backend functionalities. The frontend was built using React, HTML, and JavaScript, while the backend was implemented using Spring Boot. MySQL serves as the database backend for storing and managing data.</p>
                <a href='https://www.linkedin.com/posts/vaishnavi-dhare-145810249_internship-java-professionalgrowth-activity-7182031511934689280-hj34?utm_source=share&utm_medium=member_desktop'>View Certificate</a>
            </div>
        </div>
        <h2 className='expTitle'>View Certificate</h2>
        <div className='certificateContent'>
            <div className='certificateDesc'>
                <span className='certificateName'>AWS Graduate Certificate - </span>
                <a href='https://www.credly.com/badges/d03f977-68dd-4f02-a824e6c43d4c66b2/public_url'>View Certificate</a>
            </div>
            <div className='certificateDesc'>
                <span className='certificateName'>Oracle Learning Explorer - </span>
                <a href='https://www.linkedin.com/posts/vaishnavi-dhare-145810249_java-explorer-activity-7071009040360706048-Bifl?utm_source=share&utm_medium=member_desktop'>View Certificate</a>
            </div>
            <div className='certificateDesc'>
                <span className='certificateName'>TCS iON Carrer Edge - </span>
                <a href='https://www.linkedin.com/posts/vaishnavi-dhare-145810249_tcsioncareeredge-professionaldevelopment-activity-7068195674244153344-JVo-?utm_source=share&utm_medium=member_desktop'>View Certificate</a>
            </div>
            <div className='certificateDesc'>
                <span className='certificateName'>Core Java Test(CppBuzz) -</span>
                <a href='https://www.linkedin.com/posts/vaishnavi-dhare-145810249_java-certification-cppbuzz-activity-7145452490606518272-JAhG?utm_source=share&utm_medium=member_desktop'>View Certificate</a>
            </div>
            <div className='certificateDesc'>
                <span className='certificateName'>15th International Conference -</span>
                <a href='https://www.linkedin.com/posts/vaishnavi-dhare-145810249_dataanalytics-machinelearning-cropprediction-activity-7155523190763536385-iscq?utm_source=share&utm_medium=member_desktop'>View Certificate</a>
            </div>
            <div className='certificateDesc'>
                <span className='certificateName'>SQL Test Dom Certificate -</span>
                <a href='https://drive.google.com/drive/my-drive?hl=id'>View Certificate</a>            </div>
        </div>

    </section>
    );
}

