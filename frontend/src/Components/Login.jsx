import { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';
import {ToastContainer} from "react-toastify";
import { handleError, handleSuccess } from "../util";

function Login()
{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");

const submit = async (e)=> {
  e.preventDefault();

  if ( !email || !password) {
    return handleError("Fill the information properly");
  }

  const logininfo = { email, password }; 

  try {
    const url = "http://localhost:5000/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logininfo)
    });

    const result = await response.json();
    const {success,message,jwtToken , name ,error,role} = result;

    if(success)
    {
        handleSuccess(message+" "+role);

        localStorage.setItem('token',jwtToken);
         localStorage.setItem('loggedInUser',name);

        setTimeout(()=>{
            
            console.log(typeof(role));
            if(role === 'user')
            {
              handleSuccess("Logged in as User"+role);
              navigate("/studentDashboard");
            }
            else if(role === 'admin')
            {
             handleSuccess("Logged in as admin"+role);
            navigate("/adminDashboard");
            }
            else if( role === 'parent')
            {
            handleSuccess("Logged in as Parent"+role);
            navigate("/parentDashboard");
            }
            else
            {
              handleError("User not exist ")
              navigate("/");
            }
        },1000);
    }
    else if(error)
    {
        const details = error?.details[0].message;
        handleError(details);
    }
    else if(!success)
    {
        handleError(message)
    }

  } catch (err) {
    handleError("Network error: " + err);
  }
}

    return(<div className="login">
        
        <form className="form_login">
            <h1>Login</h1>
            <input type="email" placeholder="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="password" onChange={(e)=>{setPass(e.target.value)}}/>
            <input type="submit" onClick={submit}/>

            OR

            <Link to="/Signup">Click to Signup</Link>
        </form>
        <ToastContainer/>
    </div>);

}

export default Login;