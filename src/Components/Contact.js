import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  
  var email="valinamendonca@gmail.com";
  var phone=1234567890;

  return (
    <div style={{height:"100vh"}} id='contact'>
      <div style={{margin:"100px"}}>
        <br/><br/>
        <span style={{fontSize:"50px"}}>Get in Touch</span><br/><br/>
        <div align='center' style={{backgroundColor:"#FFEA00", width:"600px",margin:"5% 25%", height:"300px", borderRadius:"50px", padding:"50px", fontSize: "45px"}}>
          <div style={{marginTop: "90px"}}>
            <a href={`tel:${phone}`} target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faPhone} style={{ marginRight: "40px" }} /></a>
            <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGoogle} style={{ marginRight: "40px" }} /></a>
            <a href='https://github.com/valinamendonca' target='_blank' rel='noopener noreferrer'> <FontAwesomeIcon icon={faGithub} style={{ marginRight: "40px" }} /></a>
            <a href='https://www.linkedin.com/in/valina-m/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "40px" }} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact