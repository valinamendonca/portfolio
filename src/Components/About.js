import React from 'react'
import '../css/style.css'
import img from '../assets/p2.jpg'

function About() {
  return (
    
    <div className='about' id='about'>
      <div>
        <span style={{fontSize:"40px", fontWeight:"700", top:"200px",left:"350px",position:"absolute", fontFamily:"Lora,serif"}}>Valina Mendonca</span>
        <span style={{fontSize:"20px", fontWeight:"700", top:"270px",left:"400px",position:"absolute"}}>Software Developer</span>
        <span style={{fontSize:"19px", fontWeight:"1000", top:"350px",left:"200px", right: "720px", textAlign: "justify", wordSpacing: "4px", lineHeight: "1.6", position:"absolute", fontFamily: "Times New Roman"}}>
         <i> Hello! I'm a passionate software developer with a focus on creating efficient and scalable applications. 
        I'm always excited to collaborate on innovative projects and am open to new opportunities. Feel free to browse my portfolio to see some of my work, and don't hesitate to reach out if you'd like to connect!</i>
        </span>
        </div>
        <div ><img style={{fontSize:"20px", fontWeight:"700", top:"180px",right:"300px",position:"absolute",width:"300px",height:"300px",borderRadius:"300px"}} className="img-fluid" src={img} alt='alt'/></div>
    </div>
  )
}

export default About