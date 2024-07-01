import React,{useState} from 'react'
import html from '../assets/tech/html.png'
import js from '../assets/tech/js.png'
import react from '../assets/tech/react.png'
import css from '../assets/tech/css.png'
import node from '../assets/tech/nodejs.svg'
import express from '../assets/tech/express.png'
import php from '../assets/tech/php.png'
import mongo from '../assets/tech/mongo.gif'
import mysql from '../assets/tech/mysql.png'
import bootstrap from '../assets/tech/bootstrap.jpg'
import jquery from '../assets/tech/jquery.webp'
import django from '../assets/tech/django.png'
import postgresql from '../assets/tech/postgresql.png'
import oracle from '../assets/tech/oracle.png'
import redis from '../assets/tech/redis.png'
import python from '../assets/tech/python.jpg'
import numpy from '../assets/tech/numpy.png'
import da from '../assets/tech/da.avif'
import java from '../assets/tech/java.png'
import cp from '../assets/tech/c++.png'
import c from '../assets/tech/c.png'
import vs from '../assets/tech/vsc.jpg'
import eclipse from '../assets/tech/eclipse.png'
import git from '../assets/tech/git.png'
import github from '../assets/tech/github.png'
import figma from '../assets/tech/figma.png';

function Technologies() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'frontEnd':
        return  <div className='flex-container'>
                  <div><div><img src={html} width='200px' height='200px' alt='alt'/></div><div>HTML</div></div>
                  <div><div><img src={css} width='200px' height='200px' alt='alt'/></div><div>CSS</div></div>
                  <div><div><img src={js} width='200px' alt='alt'/></div><div>JavaScript</div></div>
                  <div><div><img src={react} width='200px' alt='alt'/></div><div>React</div></div>
                  <div><div><img src={bootstrap} width='200px' alt='alt'/></div><div>Bootstrap</div></div>
                  <div><div><img src={jquery} width='200px' alt='alt'/></div><div>jQuery</div></div>
                </div>;
      case 'backEnd':
        return  <div className='flex-container'>
                  <div><div><img src={node} width='200px' height='200px' alt='alt'/></div><div>Node.js</div></div>
                  <div><div><img src={express} width='200px' height='200px' alt='alt'/></div><div>Express</div></div>
                  <div><div><img src={php} width='200px' height='200px' alt='alt'/></div><div>PHP</div></div>
                  <div><div><img src={django} width='200px' height='200px' alt='alt'/></div><div>Django</div></div>
                </div>;
      case 'dataBase':
        return  <div className='flex-container'>
                  <div><div><img src={mysql} width='200px' height='200px' alt='alt'/></div><div>MySQL</div></div>
                  <div><div><img src={mongo} width='200px' height='200px' alt='alt'/></div><div>MongoDB</div></div>
                  <div><div><img src={postgresql} width='200px' height='200px' alt='alt'/></div><div>PostgreSQL</div></div>
                  <div><div><img src={oracle} width='200px' height='200px' alt='alt'/></div><div>Oracle Database</div></div>
                  <div><div><img src={redis} width='200px' height='200px' alt='alt'/></div><div>Redis</div></div>
                </div>;
      case 'Machine Learning':
        return  <div className='flex-container'>
                  <div><div><img src={python} width='200px' height='200px' alt='alt'/></div><div>Python</div></div>
                  <div><div><img src={numpy} width='200px' height='200px' alt='alt'/></div><div>Numpy</div></div>
                  <div><div><img src={da} width='200px' height='200px' alt='alt'/></div><div>Data Analytics</div></div>
                </div>;
      case 'Programming Languages':
        return  <div className='flex-container'>
                  <div><div><img src={java} width='200px' height='200px' alt='alt'/></div><div>Java</div></div>
                  <div><div><img src={cp} width='200px' height='200px' alt='alt'/></div><div>C++</div></div>
                  <div><div><img src={python} width='200px' height='200px' alt='alt'/></div><div>Python</div></div>
                  <div><div><img src={c} width='200px' height='200px' alt='alt'/></div><div>C</div></div>
                </div>;
      case 'Development Tools':
        return  <div className='flex-container'>
                  <div><div><img src={vs} width='200px' height='200px' alt='alt'/></div><div>Visual Studio Code</div></div>
                  <div><div><img src={eclipse} width='200px' height='200px' alt='alt'/></div><div>Eclipse</div></div>
                  <div><div><img src={github} width='200px' height='200px' alt='alt'/></div><div>GitHub</div></div>
                  <div><div><img src={git} width='200px' height='200px' alt='alt'/></div><div>Git</div></div>
                  <div><div><img src={figma} width='200px' height='200px' alt='alt'/></div><div>Figma</div></div>
                </div>;
      default:
        return  <div className='flex-container'>
                  <div><div><img src={html} width='200px' height='200px' alt='alt'/></div><div>HTML</div></div>
                  <div><div><img src={css} width='200px' height='200px' alt='alt'/></div><div>CSS</div></div>
                  <div><div><img src={js} width='200px' alt='alt'/></div><div>JavaScript</div></div>
                  <div><div><img src={react} width='200px' alt='alt'/></div><div>React</div></div>
                  <div><div><img src={bootstrap} width='200px' alt='alt'/></div><div>Bootstrap</div></div>
                  <div><div><img src={jquery} width='200px' alt='alt'/></div><div>jQuery</div></div>
                </div>;
    }
  };
  return (
    <div id='tech' style={{fontFamily:"cursive",height:"100vh",padding:"10px"}}>
      <div style={{margin:"100px"}}>
        <span style={{fontSize:"50px"}}>Technologies</span><br/><br/>
        <div style={{backgroundColor:"grey", padding: "20px"}}>
        <select style={{fontSize:"20px"}} onChange={handleSelectChange}>
          <option value='frontEnd'>Front-End</option>
          <option value='backEnd'>Back-End</option>
          <option value='Programming Languages'>Programming Languages</option>
          <option value='dataBase'>DataBase</option>
          <option value='Machine Learning'>Machine Learning</option>
          <option value='Development Tools'>Development Tools</option>
        </select>
        <div id='content' style={{margin:"10px",backgroundColor:"lightgray"}}>{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}

export default Technologies