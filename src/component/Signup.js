import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup (){
   const navigate = useNavigate()
  
    const onSubmitForm = (event) => {
      event.preventDefault()
      navigate("/home")
    }
    return (
      <div className="signin-container">
        <div className="signin-card">
          <h2 className="create-heading">Create your <br /> PopX account</h2>
          <form onSubmit={onSubmitForm}>
            <div className="login-input-container">
            <div className="input-group">
            <label className="input-label">Full Name <span className="span-item">*</span></label>
            <input className="login-input" type="text" placeholder="Marry Doe" required/>
          </div>
          <div className="input-group">
            <label className="input-label">Phone Number <span className="span-item">*</span></label>
            <input className="login-input" type="text" placeholder="Marry Doe" required/>
          </div>
          <div className="input-group">
            <label className="input-label">Email address <span className="span-item">*</span></label>
            <input className="login-input" type="email" placeholder="Marry Doe" required/>
          </div>
          <div className="input-group">
            <label className="input-label">Password <span className="span-item">*</span></label>
            <input className="login-input" type="password" placeholder="Marry Doe" required/>
          </div>
          <div className="input-group">
            <label className="input-label">Company name <span className="span-item">*</span></label>
            <input className="login-input" type="text" placeholder="Marry Doe" required/>
          </div>
          </div>
          <p>Are you an Aggency? <span className="span-item">*</span></p>
          <div className="agency-container">
            <label>Yes</label>
            <input value="yes" type="radio" defaultChecked/>
            <label>No</label>
            <input value="no" type="radio"/>
          </div>
          <button className="create-btn" type="submit">Create Account</button>
          </form>
          
        </div>
      </div>
    );
}

export default Signup;