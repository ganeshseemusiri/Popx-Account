import "./Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
const navigate = useNavigate()
    return (
        <div className="login-container">
            <dvi>
                <h1>Welcome to POpX</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="create-btn-container">
                    <button className="button-create" onClick={() => navigate("/signup")}>Create Account</button>
                    <button className="button-login" onClick={() => navigate('/login')}>Already Registered? Login</button>
                </div>
            </dvi>
        </div>
    )
}
export default Welcome