import {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import SstudentPanel from "./SstudentPanel";
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import { Carousel } from 'bootstrap';
import BCarousel from './BCarousel';
import {Typewriter} from 'react-simple-typewriter'
import React, { useState, useEffect } from "react";
import ContactUs from './ContactUs';
import Dashboard from './Dashboard';
import {Link, useLocation} from 'react-router-dom'; 



function StudentPanel(){


    const navigate = useNavigate()
  const home =useRef(null);
  const aboutus =useRef(null);
  const contact =useRef(null);
  const noti =useRef(null);
  const others =useRef(null);
  const location =useLocation();
  console.log(location.state)


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour:"smooth",
    });
  }


  return (
    <>
    
    <div style={{display:'block'}}>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <img class="studentimgg" src="https://photoskart.com/wp-content/uploads/2022/05/graduated-student-icon-vector-stock-photo.jpg" onClick={() => navigate('Dashboard', {state: {prn: location.state.prn}})} on alt="img"  ></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={() => scrollToSection(home)} style={{paddingLeft:"40px",paddingRight:"10px"}}>HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  onClick={() => scrollToSection(aboutus)} style={{paddingLeft:"30px",paddingRight:"10px"}}>ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link "  onClick={() => scrollToSection(contact)} style={{paddingLeft:"30px",paddingRight:"10px"}}>CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={() => navigate('notifications')} style={{paddingLeft:"40px",paddingRight:"10px"}}>NOTIFICATIONS</a>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft:"30px",paddingRight:"10px"}}>
                                    FEATURES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" onClick={() => navigate('jobrolematch', {state: {prn: location.state.prn}})}><li>MATCH COMPANIES WITH YOUR SKILLSET</li></a></li>
                                    <li><a class="dropdown-item" onClick={() => navigate('backlogstudd', {state: {prn: location.state.prn}})}><li>COMPANIES WHICH HIRE BACKLOG STUDENTS</li></a></li>
                                    {/* <li><a class="dropdown-item" onClick={() => scrollToSection(noti)}>NOTIFICATIONS</a></li>
                                    <li><a class="dropdown-item" onClick={() => scrollToSection(others)}>CONTACT</a></li> */}
                                  
                                    
                                </ul>
                            </li>
                            


                            
                            
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </div>


    
    <div className="homme" ref={home}>
    <ScrollToTop />
        <div class="row" style={{width:"100%", margin:"0px", padding:"0px"}}>
            <h1 className='headfont' style={{marginTop:"6px",marginBottom:"6px",color:"red"}}>HOME</h1>
            <hr className="hr" style={{height:"3px",background:"black"}}></hr>

            <div  className="marquee">
                <marquee behavior="alternate">Welcome to Student Panel of SIT Placement Cell</marquee>
            </div>

            <img style={{padding:"0px" ,opacity:"0.3",height:"597px"}} src='https://www.sitpune.edu.in/index/assets/images/HC4A0654.jpg'></img>
            <h3 class="span" style={{position:"absolute" , color:"black" ,textAlign:"center", marginTop:"300px" ,fontSize:"50px" ,color:"#625e5e"}}> The Future Belongs To Those Who Believe<br></br>
            <span  style={{color:"red"}}><b>
            <Typewriter 
                words={[' In their Dreams', ' In themselves', ' In Persistent Hardwork', ' In Innovation',' In Power of thier Ideas',' In their Dreams', ' In themselves', ' In Persistent Hardwork', ' In Innovation',' In Power of thier Ideas']}
                loop={25}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                
            /></b>
            </span>
            </h3>        
        </div>
    </div>
    
    <div className='aboutus' ref={aboutus}>
        <h1 className='headfont' style={{marginTop:"10px",marginBottom:"10px",color:"white"}}>ABOUT US</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
        
        
        

        

                                    

        <BCarousel />
    </div>
    
   
    <div className='contact' ref={contact}>
        <h1 className='headfont' style={{marginTop:"10px",marginBottom:"10px",color:"red"}}>CONTACT US</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
        
        <ContactUs />
        
        
    </div>
   
    </>
  )
}



  


export default StudentPanel;
