import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [agency, setAgency] = useState("yes");
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    navigate("/home")
  }
  return (
    <div className="signup-container">
      <div className="signup-bg-container">
        <h1>Signup your <br /> PopX account</h1>
        <form className="form-container" onSubmit={onSubmitForm}>
          <div className="signup-input-container">
            <div className="input-group">
              <label className="input-label">Full Name <span className="span-item">*</span></label>
              <input className="login-input" type="text" placeholder="Marry Doe" required />
            </div>
            <div className="input-group">
              <label className="input-label">Phone Number <span className="span-item">*</span></label>
              <input className="login-input" type="text" placeholder="Marry Doe" required />
            </div>
            <div className="input-group">
              <label className="input-label">Email address <span className="span-item">*</span></label>
              <input className="login-input" type="email" placeholder="Marry Doe" required />
            </div>
            <div className="input-group">
              <label className="input-label">Password <span className="span-item">*</span></label>
              <input className="login-input" type="password" placeholder="Marry Doe" required />
            </div>
            <div className="input-group">
              <label className="input-label">Company name <span className="span-item">*</span></label>
              <input className="login-input" type="text" placeholder="Marry Doe" required />
            </div>
             <div>
            <p>Are you an Aggency? <span className="span-item">*</span></p>
          <div className="agency-container">
            <label>Yes</label>
            <input type="radio" name="agency"
            value="yes"
            checked={agency === "yes"}
            onChange={(e) => setAgency(e.target.value)} />
            <label>No</label>
            <input type="radio" name="agency"
            value="no"
            checked={agency === "no"}
            onChange={(e) => setAgency(e.target.value)}/>
          </div>
          </div>
          </div>
          <div className="button-container">
        <button className="create-btn" type="submit">Create Account</button>
      </div>
        </form>
      </div>
      
    </div>
  );
}

export default Signup;