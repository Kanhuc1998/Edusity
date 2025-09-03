import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's 
            comprehensive education programs.Our cutting-edge 
            curriculum is designed to empower student with the knowledge,
            skills, and expresiences needed to excel in the dynamic filed of education.</p>
        <p>With a focus on innovation, hands-on learning, and personalized
         mentorship, ourprograms prepare aspiring educators to male a 
         meaningful impact in classrooms, schools,and comminities.</p>
         <p>Wether you aspire to become atecaher , administrator,
            counsler, or educational leader, our diverse range of Programs
            offer the pathway to achieve your goals and unlock your
            full potential in shaping the future of education. </p>
      </div>
    </div>
  )
}

export default About
