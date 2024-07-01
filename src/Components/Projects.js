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
          <div className="container mx-auto px-5 rounded" style={{ backgroundColor: 'lightgrey', maxWidth: "1200px" }}>
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img alt="pms" src={slcm} className="img-fluid" style={{ maxHeight: '550px', width: 'auto' }} />
              </div>
              <div className="col-md-6 text-center text-sm-justify">
                <span className="h3 d-block">Student Life Cycle Management System</span>
                <p className="my-5">
                  The Student Lifecycle Management (SLCM) System is an integrated software platform designed to streamline and enhance the administrative and academic processes of educational institutions. It provides a comprehensive solution to manage the entire student lifecycle, from admission to graduation, ensuring efficient handling of student data and facilitating seamless communication between students, faculty, and administration.
                </p>
                <p><strong>Technologies used:</strong> HTML, CSS, JavaScript, Python, Django, PostgreSQL</p>
                <a href="https://slcm-valina.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  Click me for Preview.
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-5 rounded" style={{ backgroundColor: 'lightgrey', maxWidth: "1200px" }}>
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
            <img alt="pms" src={event}  className="img-fluid" style={{ maxHeight: '550px', width: 'auto' }}/>
            </div>
              <div className="col-md-6 text-center text-sm-justify">
              <p className="h3 d-block">Event Management System</p>
              <p className="my-5">
              An Event Management System (EMS) is a software solution designed to facilitate the planning, organization, and execution of events. These events can range from small meetings and conferences to large-scale conventions, festivals, and corporate events. The primary goal of an EMS is to streamline the entire event management process, ensuring that all aspects of the event are efficiently handled from start to finish.              
              </p>
              <p><strong>Technologies used:</strong>HTML, CSS, JavaScript, PHP, MySQL</p>
              {/*<a href='https://slcm-valina.netlify.app' target='_blank' rel='noopener noreferrer' style={{color: "black", textDecoration: "none"}}><b>Click me for Preview.</b></a>*/}
            </div></div>
          </div>
          <div className="container mx-auto px-5 rounded" style={{ backgroundColor: 'lightgrey', maxWidth: "1200px" }}>
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img alt="pms" src={pms} className="img-fluid" style={{ maxHeight: '550px', width: 'auto' }}/></div>
                <div className="col-md-6 text-center text-sm-justify">
                <p className="h3 d-block">Project Management System</p>
                <p className="my-5">
              An automated system to track the progress of the ongoing projects. It consists of a user authentication system, through which the employee can log in and start the timer for the particular module within the project, hence making it easier to track its progress. Supports three types of users: Admin, Project Manager, Employee
              </p>
              <p><strong>Technologies used:</strong>React, Node.js, Express, MySQL</p>
            </div></div>
          </div>
          <div className="container mx-auto px-5 rounded" style={{ backgroundColor: 'lightgrey', maxWidth: "1200px" }}>
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img alt="eCom" src={eCom} className="img-fluid" style={{ maxHeight: '550px', width: 'auto' }}/></div>
                <div className="col-md-6 text-center text-sm-justify">
                <p className="h3 d-block">E-commerce System for Rubber Rollers</p>
                <p className="my-5">
              Developed to provide an online system to make orders and purchase rubber/copper rollers. Customers can even log in and track their order delivery status. Quotations are sent by the admin when the customer requests for it and order can be placed once the payment is made.</p>
              <p><strong>Technologies used:</strong> React, Node.js, Express, MongoDB</p>
            </div></div>
          </div>
          <div className="container mx-auto px-5 rounded" style={{ backgroundColor: 'lightgrey', maxWidth: "1200px" }}>
            <div className="row align-items-center">
              <div className="col-md-6 text-center"><img alt="eCom" src={eCom} className="img-fluid" style={{ maxHeight: '550px', width: 'auto' }}/></div>
              <div className="col-md-6 text-center text-sm-justify">
              <p className="h3 d-block">More Website Templates</p>
              <br /><br /><br />
              <ul style={{listStyleType:"none"}}>
              <li><a href='https://clever-books-valina.netlify.app' target='_blank' rel='noopener noreferrer' style={{color: "black", textDecoration: "none"}}><b>Ecommerce Website</b></a></li>

              </ul>
            </div></div>
          </div>

        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
