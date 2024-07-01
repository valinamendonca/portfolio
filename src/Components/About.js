import React from 'react'
import '../css/style.css'
import img from '../assets/p2.jpg'

function About() {
  return (
    
    <div className='about container-fluid min-vh-100' id='about'>
      <div className='row'>
      <div className='col-sm-6' style={{marginTop: "18%", paddingLeft: "10%"}}>
        <span style={{fontSize:"40px", fontWeight:"700", fontFamily:"Lora,serif"}}>Valina Mendonca</span><br/>
        <span style={{fontSize:"20px", fontWeight:"700", }}>Software Developer</span><br/><br/>
        <span  style={{fontSize:"19px", fontWeight:"1000", textAlign: "justify", wordSpacing: "4px", lineHeight: "1.6", fontFamily: "Times New Roman"}}>
         <i> Hello! I'm a passionate software developer with a focus on creating efficient and scalable applications. 
        I'm always excited to collaborate on innovative projects and am open to new opportunities. Feel free to browse my portfolio to see some of my work, and don't hesitate to reach out if you'd like to connect!</i>
        </span>
        </div>
        <div className='col-sm-6' style={{marginTop: "15%"}}><img style={{fontSize:"20px", fontWeight:"700", width:"300px",height:"300px",borderRadius:"300px"}} className="img-fluid d-xs-none" src={img} alt='alt'/></div>
    </div></div>
  )
}

export default About