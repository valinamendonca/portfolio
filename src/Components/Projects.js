import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import eCom from '../assets/e-com.jpg';
import pms from '../assets/pms.jpg';
import slcm from '../assets/slcm.jpg'
import event from '../assets/event.jpg'

function Projects() {
  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
    zIndex: 2,
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...arrowStyles, left: 120 }}
      >
        &#9664;
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...arrowStyles, right: 120 }}
      >
        &#9654;
      </button>
    );

  return (
    <div id='projects' style={{ fontFamily: 'cursive' }}>
      <span style={{ fontSize: '50px' }}>Projects</span>
      <br />
      <br />
      <div style={{ height: '90vh' }}>
        <Carousel 
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          
          interval={5000}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          <div style={{ backgroundColor: 'pink', margin: '0px 200px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '50px 100px', borderRadius: '15px'}}>
            <div><a href='https://slcm-valina.netlify.app' target='_blank' rel='noopener noreferrer'><img alt="pms" src={slcm} style={{height: '550px', width: "500px"}}/></a></div>
            <div align='center' style={{ marginLeft: '10%', textAlign: "justify"  }}>
              <span style={{ fontSize: '30px', textAlign: "center"}}>Student Life Cycle Management System</span>
              <br /><br /><br />
              The Student Lifecycle Management (SLCM) System is an integrated software platform designed to streamline and enhance the administrative and academic processes of educational institutions. It provides a comprehensive solution to manage the entire student lifecycle, from admission to graduation, ensuring efficient handling of student data and facilitating seamless communication between students, faculty, and administration.              
              <br /><br /><b>Technologies used:</b> HTML, CSS, JavaScript, Python, Django, PostgreSQL<br/><br/><br/>
              <a href='https://slcm-valina.netlify.app' target='_blank' rel='noopener noreferrer' style={{color: "black", textDecoration: "none"}}><b>Click me for Preview.</b></a>
            </div>
          </div>
          <div style={{ backgroundColor: 'pink', margin: '0px 200px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '50px 100px', borderRadius: '15px'}}>
            <div><a href='https://slcm-valina.netlify.app' target='_blank' rel='noopener noreferrer'><img alt="pms" src={event} style={{height: '550px', width: "500px"}}/></a></div>
            <div align='center' style={{ marginLeft: '10%', textAlign: "justify"  }}>
              <span style={{ fontSize: '30px', textAlign: "center"}}>Event Management System</span>
              <br /><br /><br />
              An Event Management System (EMS) is a software solution designed to facilitate the planning, organization, and execution of events. These events can range from small meetings and conferences to large-scale conventions, festivals, and corporate events. The primary goal of an EMS is to streamline the entire event management process, ensuring that all aspects of the event are efficiently handled from start to finish.              
              <br /><br /><b>Technologies used:</b> HTML, CSS, JavaScript, PHP, MySQL<br/><br/><br/>
              {/*<a href='https://slcm-valina.netlify.app' target='_blank' rel='noopener noreferrer' style={{color: "black", textDecoration: "none"}}><b>Click me for Preview.</b></a>*/}
            </div>
          </div>
          <div style={{ backgroundColor: 'pink', margin: '0px 200px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '50px 100px', borderRadius: '15px'}}>
            <div><img alt="pms" src={pms} style={{height: '550px', width: "500px"}}/></div>
            <div align='center' style={{ marginLeft: '10%', textAlign: "justify"  }}>
              <span style={{ fontSize: '30px', textAlign: "center"}}>Project Management System</span>
              <br /><br /><br />
              An automated system to track the progress of the ongoing projects. It consists of a user authentication system, through which the employee can log in and start the timer for the particular module within the project, hence making it easier to track its progress. Supports three types of users: Admin, Project Manager, Employee
              <br /><br /><b>Technologies used:</b> React, Node.js, Express, MySQL
            </div>
          </div>
          <div style={{ backgroundColor: 'pink', margin: '0px 200px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '50px 100px', borderRadius: '15px' }}>
            <div><img alt="eCom" src={eCom} style={{height: '550px', width: "500px"}}/></div>
            <div align='center' style={{ marginLeft: '10%', textAlign: "justify"  }}>
              <span style={{ fontSize: '30px', textAlign: "center"}}>E-commerce System for Rubber Rollers</span>
              <br /><br /><br />
              Developed to provide an online system to make orders and purchase rubber/copper rollers. Customers can even log in and track their order delivery status. Quotations are sent by the admin when the customer requests for it and order can be placed once the payment is made.
              <br /><br /><b>Technologies used:</b> React, Node.js, Express, MongoDB
            </div>
          </div>
          <div style={{ backgroundColor: 'pink', margin: '0px 200px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '50px 100px', borderRadius: '15px' }}>
            <div><img alt="eCom" src={eCom} style={{height: '550px', width: "500px"}}/></div>
            <div align='center' style={{ marginLeft: '10%', textAlign: "justify"  }}>
              <span style={{ fontSize: '30px', textAlign: "center"}}>More Website Templates</span>
              <br /><br /><br />
              <ul>
              <li><a href='https://clever-books-valina.netlify.app' target='_blank' rel='noopener noreferrer' style={{color: "black", textDecoration: "none"}}><b>Ecommerce Website</b></a></li>

              </ul>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
