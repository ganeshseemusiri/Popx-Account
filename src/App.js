import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./component/Welcome";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";

function App() {
  return (
    <Router>
     <div className="routers-wrap">
       <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
     </div>
    </Router>
  );
}

export default App;