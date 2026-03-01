import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    navigate("/home")
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Signin to your <br /> PopX account</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
        <form onSubmit={onSubmitForm}>
          <div className="login-input-container">
          <div className="input-group">
          <label className="input-label">Email Address</label>
          <input className="login-input" type="email" placeholder="Enter email address" required/>
        </div>
        <div className="input-group">
          <label className="input-label">Password</label>
          <input className="login-input" type="password" placeholder="Password" required/>
        </div>
        </div>

        <button className="login-btn" type="submit">Login</button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;