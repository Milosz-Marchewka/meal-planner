import { svgs } from "../../assets/svg/svgs";

const ValidatedEmail = ({email, setEmail, emailCheck})=>{
    return(
        <>
            <div className="login-form-inputWrapper">
                { svgs.profile.email }
                <input className={!emailCheck.status ? 'wrongInputVisible' : ''} type="email" placeholder="e.g. RecipeLover@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <p style={{color: 'red'}}>{!emailCheck.status ? emailCheck.msg : ""}</p>
        </>
    );
}

export default ValidatedEmail;