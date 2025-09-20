import { useEffect, useState } from "react";
import { svgs } from "../../assets/svg/svgs";
import "../../styles/login.css";

const Login = () => {
    const [visibility, setVisibility] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailCheck, setEmailCheck] = useState({status: true, msg: ""});
    const [passCheck, setPassCheck] = useState({status: true, msg: ""});


    const getData = async () => {
        try{
            const res = await fetch("http://127.0.0.1:3000/login",{
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if(!res.ok){
                throw new Error(res.status);
            }

            const data = await res.json();

            
            const emailJson = data[0];
            setEmailCheck(emailJson);

            const passwordJson = data[1];
            setPassCheck(passwordJson);

        }catch(e){
            setPassCheck({status: false, msg: e.message});
        }
    }

    useEffect(()=>{
        if(passCheck.status === false || emailCheck.status === false){
            getData();
        }
    }, [password, email]);

    const handleSubmit = async (e)=>{
        e.preventDefault(); 
        getData();
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
                    <input className={!emailCheck.status ? 'wrongInputVisible' : ''} type="email" placeholder="e.g. RecipeLover@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <p style={{color: 'red'}}>{!emailCheck.status ? emailCheck.msg : ""}</p>
                <label>Your password</label>
                <div className="login-form-inputWrapper">
                    <button onClick={handleVisibility} type="button">{ visibility ? svgs.login.visible : svgs.login.hidden }</button>
                    <input className={!passCheck.status ? visibility ? 'wrongInputVisible' : 'wrongInputHidden' : ''} type={visibility ? 'text' : 'password'} placeholder="e.g. iLoveRecipes123!" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <p style={{color: 'red'}}>{!passCheck.status ? passCheck.msg : ""}</p>
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