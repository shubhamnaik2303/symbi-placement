import React ,{useState,useEffect} from "react"
import Axios from "axios"
import {gapi} from 'gapi-script'
import Login from "./Login";
import { useNavigate } from "react-router-dom";
//import Validation from "./Validation";

const client_id ="http://128628804087-oo6hdb04efgmpjfg1vm9vce1vq78gqcp.apps.googleusercontent.com";

function StudentLogin(){

    // useEffect(() => {
    //     function start(){
    //       gapi.client.init({
    //         client_id:client_id,
    //         scope:""
    //       })
    //     };
    
    //     gapi.load('client:auth2',start)
    //   })

    const navigate = useNavigate()

    
    const[prn,setprn]=useState("");
    const[email,setEmail]=useState(""); // using react state hooks
    const[pass,setPass]=useState("");
    
    const[errors,setErrors]=useState("false");
    const[emailerrors ,setEmailError]=useState("false");
    const[passerrors ,setPassError]=useState("false");
    const[loginStatus, setLoginStatus]=useState("");


 


    function onNavigate(e){
        
        
        if(prn.length !== 11 || pass.length < 8 ){
            alert("Incorrect values! Please check the form once again.")
        }else
        {
            e.preventDefault();
            Axios.post("http://localhost:3001/login", {
            prn: prn,
            pass: pass,
            }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message);
            }else{
               navigate('sPanel', {state: {prn: prn}})
                //navigate(`/sPanel/${prn}`,{state:{prn:props.prn}});
            }
            })

            
            
        }
         
      }
   
    function storeChangedPrn(e){
        const Prn=e.target.value;
        if(Prn.length !== 11){
            setErrors(true)
        }else{
            setErrors(false)
        }
        setprn(Prn);
    }

  

    function storeChangedEmail(e){
       
        
        const Email=e.target.value;
        
        setEmail(Email);
       
    }
    function storeChangedPass(e){
        const Pass=e.target.value;
        if(Pass.length < 8){
            setPassError(true)
        }else{
            setPassError(false)
        }
        setPass(Pass);
    }

    function handleSubmit(e){
        e.preventDefault();
       
        //setErrors(Validation(prn))
    }
    

    return(
        <div className="Appp">

        <div className="auth-form-container">
                <img class="img" src="https://www.set-test.org/images/logos/SIT.png" alt="MISSING GIF"></img>
                <hr className="hr"></hr>
                <div className="studentLogin">
                    <img class="studentimg" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/login-30-370668.png?f=avif&w=256"></img>
                    <h3>STUDENT LOGIN</h3>
                    
                </div>
                <hr className="hr"></hr>
                <form onSubmit={handleSubmit} className="login-form">

                    <label className="try">PRN :</label>
                    <input className="tryinput" type="number" value={prn} autocomplete="off" onChange={storeChangedPrn} placeholder="e.g  21070122161" id="prn" name="prn"></input>
                    {errors ? <p className="p" style={{color:"red" , fontSize:"13px"}}>Invalid PRN  </p> : ""}

                    
                    

                    <label className="try">Password :</label>
                    <input className="tryinput" type="password" value={pass} autocomplete="off" onChange={storeChangedPass} placeholder="Passsword" id="pass" name="pass"></input>
                    
                    {passerrors ? <p className="p" style={{color:"red" , fontSize:"13px"}}>Invalid Password (greater than 8 charachters) </p> : ""}
                    <a href="/slogin/try" className="forpass" style={{ color:"blue" , fontSize:"12px", marginBottom:"5px"}}>Forgot Paaword?</a>

                    <button class="loginbutton"  type="submit" onClick={onNavigate}>Log In</button>
                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
                   
                </form>
                
            </div>
            </div>
    ) 
}

export default StudentLogin
