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
import ImageGrid from './ImageGrid'

function Technologies() {
  const [selectedOption, setSelectedOption] = useState('frontEnd');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const groups = {
    frontEnd: [
        { src: html, alt: 'HTML', title: 'HTML' },
        { src: css, alt: 'CSS', title: 'CSS' },
        { src: js, alt: 'JavaScript', title: 'JavaScript' },
        { src: react, alt: 'React', title: 'React' },
        { src: bootstrap, alt: 'Bootstrap', title: 'Bootstrap' },
        { src: jquery, alt: 'jQuery', title: 'jQuery' },
    ],
    backEnd: [
      { src: node, alt: 'Node.js', title: 'Node.js' },
      { src: express, alt: 'Express', title: 'Express' },
      { src: php, alt: 'PHP', title: 'PHP' },
      { src: django, alt: 'Django', title: 'Django' },
    ],
    dataBase: [
      { src: mysql, alt: 'MySQL', title: 'MySQL' },
      { src: mongo, alt: 'MongoDB', title: 'MongoDB' },
      { src: postgresql, alt: 'PostgreSQL', title: 'PostgreSQL' },
      { src: oracle, alt: 'Oracle Database', title: 'Oracle Database' },
      { src: redis, alt: 'Redis', title: 'Redis' },
    ],
    'Machine Learning': [
      { src: python, alt: 'Python', title: 'Python' },
      { src: numpy, alt: 'Numpy', title: 'Numpy' },
      { src: da, alt: 'Data Analytics', title: 'Data Analytics' },
    ],
    'Programming Languages': [
      { src: java, alt: 'Java', title: 'Java' },
      { src: cp, alt: 'C++', title: 'C++' },
      { src: python, alt: 'Python', title: 'Python' },
      { src: c, alt: 'C', title: 'C' },
    ],
    'Development Tools': [
      { src: vs, alt: 'Visual Studio Code', title: 'Visual Studio Code' },
      { src: eclipse, alt: 'Eclipse', title: 'Eclipse' },
      { src: github, alt: 'GitHub', title: 'GitHub' },
      { src: git, alt: 'Git', title: 'Git' },
      { src: figma, alt: 'Figma', title: 'Figma' },
    ],
  };

  return (
    <div id='tech' className='mt-5' style={{fontFamily:"cursive", minHeight:"100%", padding:"10px"}}>
      <div className='m-5'>
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
        <div id='content' style={{margin:"10px",backgroundColor:"lightgray"}}><ImageGrid images={groups[selectedOption]}/></div>
        </div>
      </div>
    </div>
  )
}

export default Technologies