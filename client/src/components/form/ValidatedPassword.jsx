import { svgs } from "../../assets/svg/svgs"

const ValidatedPassword = ({password, setPassword, visibility, handleVisibility, passCheck}) => {
    return(
        <>
            <div className="login-form-inputWrapper">
                <button onClick={handleVisibility} type="button">{ visibility ? svgs.login.visible : svgs.login.hidden }</button>
                <input className={!passCheck.status ? visibility ? 'wrongInputVisible' : 'wrongInputHidden' : ''} type={visibility ? 'text' : 'password'} placeholder="e.g. iLoveRecipes123!" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <p style={{color: 'red'}}>{!passCheck.status ? passCheck.msg : ""}</p>
        </>
    );
}

export default ValidatedPassword;