import React from 'react'
import {useNavigate} from 'react-router-dom'

const Ask = () => {
    const navigate = useNavigate()
  return (
    <div className='Appp'>
    <div className="auth-form-container">
        <img  class="imgage" src="https://www.set-test.org/images/logos/SIT.png" alt="MISSING GIF" ></img>
        <hr className="hr"></hr>
        <h2 className='head'><b>Welcome to SIT Placement Guide</b></h2>
        <hr className="hr"></hr>
        <h3 className='huii' style={{margin:"5px", paddingBottom:"20px"}}>Please Login to continue</h3>
        
        
          
          <button class="Llogin"  onClick={() => navigate('slogin')}>LOGIN AS A STUDENT</button>
          <button class="Llogin"  onClick={() => navigate('alogin')}>LOGIN AS AN ADMIN</button>
          
        
    </div>
    </div>
  )
}

export default Ask