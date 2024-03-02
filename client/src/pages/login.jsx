import { useRef, useState } from "react";
import { FaUser, FaLock, FaUnlock, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from "../assets/img/logo.png";
import "../assets/scss/login.scss";
import { useNavigate } from "react-router-dom";
import { cookies, login } from "../services/entry";

const Login = () => {
  const emailRef = useRef(null); 
  const navigate = useNavigate();
  const [userIdentifier, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await login({ userIdentifier, password });
      if (response.message === "success") {
        cookies.set("authorization", response.accessToken);
        cookies.set("chatToken", response.chatToken);
        cookies.set("userType", response.userType);
        cookies.set("userFullName", response.userFullName);
        cookies.set("username", response.username);

        navigate("/");
        window.location.reload();
      } else {
        // TODO: Show Component about the error
        console.log(response);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const goToEmailInput = () => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  };

  return (
    <div className="login-container">
      <header>
        
      </header>
      <div className="wrapper">
        <img className="logo-img" src={logo} alt="logo" />
        <h1>PHINMA HUB</h1>
        <form>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email or Username"
              required
              value={userIdentifier}
              onChange={(e) => setUsername(e.target.value)}
              ref={emailRef}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaUnlock
                className="icon-lock"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaLock
                className="icon-lock"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <div className="remember-forgot">
            <label>
              {/* TODO: fix this */}
              <input type="checkbox" /> Remember me?
            </label>
            <a href="#"> Forgot password?</a>
          </div>
          <button className="login" type="button" onClick={handleLogin}>
            Login
          </button>
          <div className="apps">
            <FaXTwitter className="i" />
            <FaFacebookF className="i" />
            <SiGmail className="i" />
            <FaYoutube className="i" />
            <FaTiktok className="i" />
          </div>
        </form>
      </div>
  
      <footer className="footer">
        <p>&copy; All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
