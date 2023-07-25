import React ,{useState} from "react"
import { useNavigate } from "react-router-dom";

const AdminLogin=()=>{
    const navigate = useNavigate()
    const[usern,setusern]=useState("");
    const[email,setEmail]=useState(""); // using react state hooks
    const[pass,setPass]=useState("");
    
    const[errors,setErrors]=useState("false");
    const[passerrors,setpassErrors]=useState("false");

    function onNavigate(){

        if(usern !="admin@sit" || pass!= "admin123" ){
            alert("Incorrect values! Please check the form once again.")
        }else{
            navigate('aPanel')
        }
    }

    function storeChangedusern(e){
        const UserName=e.target.value;
        if(UserName != "admin@sit"){
            setErrors(true)
        }else{
            setErrors(false)
        }
        setusern(UserName);
    }

    function storeChangedEmail(e){
        const Email=e.target.value;
        setEmail(Email);
    }
    function storeChangedPass(e){
        const Pass=e.target.value;
        if(Pass != "admin123"){
            setpassErrors(true)
        }else{
            setpassErrors(false)
        }
        setPass(Pass);
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); //this function helps to save data as if we do not write this website will load automatically for changes and we will loose the data inserted by the user
        
    }

    return(
        <div className='Appp'>
        <div className="auth-form-container">
            <img  class="img" src="https://www.set-test.org/images/logos/SIT.png" alt="MISSING GIF" ></img>
            <hr className="hr"></hr> 

            <div className="adminLogin">
                <img class="adminimg" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/admin-4628008-3833477.png?f=avif&w=256"></img>
                <h3>ADMIN LOGIN</h3>
            </div>
            
            <hr className="hr"></hr>
            <form onSubmit={handleSubmit} className="login-form">
                
                <label className="try">User Name :</label>
                <input className="tryinput" type="text" value={usern} autocomplete="off" onChange={storeChangedusern} placeholder="User-Name" id="usern" name="usern"></input>
                {errors ? <p className="p" style={{color:"red" , fontSize:"13px"}}>Invalid Username  </p> : ""}
                
                {/* <label className="try">Email :</label>
                <input className="tryinput" type="email" value={email} autocomplete="off" onChange={storeChangedEmail} placeholder="youremail@sitpune.edu.in" /> */}
                
                <label className="try">Password :</label>
                <input className="tryinput" type="password" value={pass} autocomplete="off" onChange={storeChangedPass} placeholder="Passsword" id="password" name="email"></input>
                {/* <a className="forpass" style={{ color:"blue" , fontSize:"12px"}}>Forgot Paaword?</a> */}
                {passerrors ? <p className="p" style={{color:"red" , fontSize:"13px"}}>Invalid Password (greater than 8 charachters) </p> : ""}
                
                <button class="loginbutton" type="submit" onClick={onNavigate}>Log In</button>
            </form>
        </div>
        </div>
    ) 
}

export default AdminLogin