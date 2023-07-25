import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Try = () => {
  const [email, setemail] = useState('');
  const [bplace, setbplace] = useState('');
  const [mname, setmname] = useState('');
  const navigate = useNavigate();
  const [loginstatus, setloginstatus] = useState('');

  const handleEmailInputChange = (event) => {
    setemail(event.target.value);
  };

  const handleblaceInputChange = (event) => {
    setbplace(event.target.value);
  };

  const handlemnameInputChange = (event) => {
    setmname(event.target.value);
  };

  const handleSubmitt = () => {
    // Perform actions with the entered values, e.g. send data to backend
    
    Axios.post("http://localhost:3001/fpass", {
    email: email,
    bplace: bplace,
    mname: mname
    }).then((response) => {
    if(response.data.message){
        setloginstatus(response.data.message);
    }else{
       navigate('rpass', {state: {email: email}})
        //navigate(`/sPanel/${prn}`,{state:{prn:props.prn}});
    }
  })
}

  return (

<>
    







<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"80px"}}>
            <div className="auth-form-containerr">
                <img class="img" src="https://www.set-test.org/images/logos/SIT.png" alt="MISSING GIF"></img>
                <hr className="hr"></hr>
                <div className="studentLogin">
                
                    <h4><span style={{color:"#4e4d4d"}}>PLEASE ANSWER THESE SECURITY QUESTIONS TO CHANGE YOUR PASSWORD</span></h4>

                    <hr className="hr"></hr>
                <div  className="login-form">
                <label className="try"><span style={{color:"red"}}><b>EMAIL :</b></span></label>
                    <input className="tryinput" type="email" value={email} onChange={handleEmailInputChange} placeholder="e.g xyz @sitpune.edu.in" ></input>


                    <label className="try">What is your <span style={{color:"red"}}><b>Birth Place  ?</b></span></label>
                    <input className="tryinput" type="text"
                            value={bplace}
                            onChange={handleblaceInputChange}></input>


                    <label className="try">What is your <span style={{color:"red"}}><b>Mother's Name ?</b></span></label>
                    <input className="tryinput" type="text"
                            value={mname}
                            onChange={handlemnameInputChange}></input>



                    <button class="loginbutton"   type="submit" onClick={handleSubmitt}>Submit</button>
                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginstatus}</h1>

                </div>
                </div>
                </div>
</div>


      

    </>
  );
};

export default Try;
