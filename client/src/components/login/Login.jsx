import { useState } from "react";
import { svgs } from "../../assets/svg/svgs";
import "../../styles/login.css";

const Login = () => {
    const [visibility, setVisibility] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault(); 
    }

    const handleVisibility = ()=>{
        setVisibility(!visibility);
    }

    return(
        // TODO: style login-header, make CSS finally cooperate on the topic on imported font-fam..
        <div className="login">
            <div className="login-header">
                <h3>Recipe Manager</h3>

                <h1 className="menbere-500">Let's plan meals together</h1>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <label>Your email</label>
                <div className="login-form-inputWrapper">
                    { svgs.profile.email }
                    <input type="email" placeholder="e.g. John@gmail.com"/>
                </div>
                <label>Your password</label>
                <div className="login-form-inputWrapper">
                    <button onClick={handleVisibility}>{ visibility ? svgs.login.visible : svgs.login.hidden }</button>
                    <input type={visibility ? 'text' : 'password'} placeholder="e.g. iLoveRecipes123!"/>
                    <div className="login-password-info">
                        
                    </div>
                </div>
                <button>Sign in</button>
                <div className="login-bottom">
                    <a>Don't have an account?</a>
                    <a>Forgot your password?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;