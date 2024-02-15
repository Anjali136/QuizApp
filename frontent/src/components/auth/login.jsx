import "./auth.css"
import { useAuth } from "../../context/auth-context"
import { loginHandler } from "../services/auth-service";
import {useNavigate} from "react-router-dom"
export const AuthLogin=()=>{
    const navigate=useNavigate();
    const {email,password,authDispatch}=useAuth();
    const handleEmailChange=(e)=>
    {
        authDispatch({
            type:"EMAIL",
            payload:e.target.value
        })
    }
    const handlePasswordChange=(e)=>
    {
        authDispatch({
            type:"PASSWORD",
            payload:e.target.value
        })
    }
    const handleLoginClick=(e)=>{
        e.preventDefault();
        const token=loginHandler(email,password);
        if(token)
        {
            navigate("/");
        }
        authDispatch({
            type:"TOKEN",
            payload:token,
        })
        authDispatch({
            type:"CLEAR_CREDENTIALS"
        })
    }
    const handleCredentials=()=>{
       const token= loginHandler("pk@gmail.com","ps12345");
       authDispatch({
        type:"TOKEN",
        payload:token,
    })
       if(token)
       {
        navigate("/");
       }
    }
    return(
        <div className="grid">
            <div className="login-auth">
                <h2 className="auth-title">Login</h2>
                <form onSubmit={handleLoginClick}>
                <div className="form-container">
                    <label className="form-label">
                        Email
                    </label>
                    <input className=" input" placeholder="xyz@gmail.com" onChange={handleEmailChange}></input>
                </div>
                <div className="form-container">
                    <label className="form-label">
                        Password
                    </label>
                    <input className="input" placeholder="*************" onChange={handlePasswordChange}></input>
                </div>
                <div className="cta">
                    <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
                </div>
                </form>
                <div className="button login-btn btn-outline-primary btn-margin sign-up-btn" onClick={handleCredentials}>Login with test credentials</div>
            </div>
        </div>
    )
}