import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'; 
import Axios from "axios";


const Resetpass = () =>{
    const navigate = useNavigate()
    const location =useLocation();
    console.log(location.state);
    const [email, setemail] = useState(location.state.email);
    console.log(email);
    const[loginStatus, setLoginStatus]=useState("");
    const[password, setpassword] = useState('');
    const[rpassword, setrpassword] = useState('');

    const handlepasswordInputChange = (event) => {
        setpassword(event.target.value);
      };
    
      const handlerpasswordInputChange = (event) => {
        setrpassword(event.target.value);
      };

      

    const handleSubmit = () => {
        if(password != rpassword){
            alert("The values don't match! Please enter the same values again.")
        }else if(password.length <8 ){
            alert("Password must be of atleast 8 charactes !")
        }else{
            Axios.post("http://localhost:3001/resetpass", {
                email: email,
                password: password
                }).then((response) => {
                if(response.data.message){
                    setLoginStatus(response.data.message);
                    alert("Password Changed Successfully !")
                    navigate('/slogin')
               
                }else{
                  alert("Error in connecting, Please try again Later !!")
                    //navigate(`/sPanel/${prn}`,{state:{prn:props.prn}});
                }
              })
        }
        
        
    }

    return (
        <>


<div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>
            <div className="auth-form-containerrr">
                <img class="iamg" src="https://www.set-test.org/images/logos/SIT.png" alt="MISSING GIF"></img>
                <hr className="hr"></hr>
                <div className="studentLogin">
                
                    <h4><span style={{color:"#4e4d4d"}}>RESET PASSWORD</span></h4>

                    <hr className="hr"></hr>
                <div  className="login-form">
                <label className="try"><span style={{color:"red"}}><b>NEW PASSWORD :</b></span></label>
                    <input className="tryinput" type="password" value={password} onChange={handlepasswordInputChange}  ></input>


                    <label className="try"><span style={{color:"red"}}><b>CONFIRM NEW PASSWORD</b></span></label>
                    <input className="tryinput" type="text"
                            value={rpassword}
                            onChange={handlerpasswordInputChange}></input>





                    <button class="loginbutton"   type="submit" onClick={handleSubmit}>CHANGE</button>
                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>

                </div>
                </div>
                </div>
</div>






        </>
      );
};

export default Resetpass;
