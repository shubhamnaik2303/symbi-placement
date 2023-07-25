import {useRef} from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import { Carousel } from 'bootstrap';
import BCarousel from './BCarousel';
import {Typewriter} from 'react-simple-typewriter'
import React, { useState, useEffect } from "react";


function AdminPanel(){


    const navigate = useNavigate()
  const home =useRef(null);
  const aboutus =useRef(null);
  const contact =useRef(null);
  const noti =useRef(null);
  const others =useRef(null);
  const [notificationText, setNotificationText] = useState('');
  const dispatch = useDispatch();

  

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour:"smooth",
    });
  }

  const handleSendNotification =() =>{
    dispatch({ type: 'ADD_NOTIFICATION', payload: notificationText });
    setNotificationText('');
    alert("Notification sent successfully !")
  }

  return (
    <>
    
    <div style={{display:'block'}}>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <img src="https://www.set-test.org/images/logos/SIT.png" alt="img" width="120" height="70"></img>
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
                            {/* <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={() => scrollToSection(contact)} style={{paddingLeft:"40px",paddingRight:"10px"}}>CONTACT</a>
                            </li> */}


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft:"30px",paddingRight:"10px"}}>
                                    FEATURES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" onClick={() => navigate('adminnoti')}>SEND A NOTIFICATION</a></li>
                                    <li><a class="dropdown-item" onClick={() => navigate('adminfile')}>SEND A FILE</a></li>
                                    <li><a class="dropdown-item" onClick={() => navigate('companyclassification')}>COMPANY CLASSIFICATION</a></li>
                                    <li><a class="dropdown-item" onClick={() => navigate('studmatch')}>STUDENT SKILLSET MATCHING</a></li>
                                    <li><a class="dropdown-item" onClick={() => navigate('gpasort')}>GPA SORT</a></li>
                                    <li><a class="dropdown-item" onClick={() => navigate('backlogstud')}>BACKLOG RECRUITMENT</a></li>
                                
                                    
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
        <div class="row" style={{width:"100%", margin:"0px",padding:"0px"}}>
            <h1 className='headfont' style={{marginTop:"6px",marginBottom:"6px",color:"red"}}>HOME</h1>
            <hr className="hr" style={{height:"3px",background:"solid black",marginBottom:"10px"}}></hr>

            <div  className="marquee">
            <marquee behavior="alternate">Welcome to Admin Panel of SIT Placement Cell</marquee>
            </div>
            
            <img style={{padding:"0px" ,opacity:"0.3",height:"597px"}} src='https://www.sitpune.edu.in/index/assets/images/HC4A0654.jpg'></img>
            <h3 class="span" style={{position:"absolute" , color:"black" ,textAlign:"center", marginTop:"300px" ,fontSize:"50px" ,color:"#625e5e"}}> The Future Belongs To Those Who Believe<br></br>
            <span  style={{color:"red"}}><b>
            <Typewriter 
                words={[' In their Dreams', ' In themselves', ' In Persistent Hardwork', ' In Innovation',' In Power of thier Ideas',' In their Dreams', ' In themselves', ' In Persistent Hardwork', ' In Innovation',' In Power of thier Ideas']}
                loop={5}
                
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
    {/* <div className='contact' ref={contact}>
        <h1 className='headfont' style={{marginTop:"10px",marginBottom:"10px",color:"red"}}>CONTACT</h1>
       
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
    </div> */}
    
    {/* <div className='others' ref={others}>
        <h1 className='headfont' style={{marginTop:"10px",marginBottom:"10px",color:"red"}}>FEATURES</h1>
        <hr className="hr" style={{height:"3px",background:"black"}}></hr>
        <div className='bb'>
            <button class="buttonn" onClick={() => navigate('companyclassification')}>COMPANY CLASSIFICATION</button>
            <button class="buttonn" onClick={() => navigate('studmatch')}>STUDENT SKILLSET MATCHING</button>
            
            <button class="buttonn" onClick={() => navigate('gpasort')}>SORT STUDENTS BY GPA</button>

            <button class="buttonn" onClick={() => navigate('backlogstud')}>COMPANIES RECRUITING STUDENTS WITH BACKLOG</button>
            
            
        </div>
    </div> */}
    </>
  )
}

export default AdminPanel