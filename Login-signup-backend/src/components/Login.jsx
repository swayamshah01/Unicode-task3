import React, { useState } from "react";
import "./Slider.css";
import "./LightDark.css"
import emailicon from "../assets/email.png";
import passwordicon from "../assets/password.png";
import { useNavigate  } from "react-router-dom";
const Login = ({ darkMode, setDarkMode }) => {
  const Navigate = useNavigate();
  const emailcheck =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const handleEmail = (e) => {
    const email_u = e.target.value;
    setEmail(email_u);
    if (email_u && !emailcheck.test(email_u)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    const pass_u = e.target.value;
    setPassword(pass_u);
    if (pass_u) {
      let errorMessage = [];
      if (pass_u.length < 8) errorMessage.push("at least 8 characters");
      if (!/(?=.*[A-Za-z])/.test(pass_u)) errorMessage.push("a letter");
      if (!/(?=.*\d)/.test(pass_u)) errorMessage.push("a number");
      if (!/(?=.*[@$!%*?&])/.test(pass_u))
        errorMessage.push("a special character (@$!%*?&)");

      if (errorMessage.length > 0) {
        setPassError(`Password must contain ${errorMessage.join(", ")}`);
      } else {
        setPassError("");
      }
    } else {
      setPassError("");
    }
  };

  const handleclick = (e) => {
    e.preventDefault();
    let isValid = true;
    let errorMessages = [];

    // Checking regex error
    if (emailError ||  passError) {
        isValid = false;
        errorMessages.push("Please fix all validation errors before submitting.");
    }

    // Checking empty field
    if (!email) {
        setEmailError("Email is required");
        errorMessages.push("Email is required");
        isValid = false;
    }
    
    if (!password) {
        setPassError("Password is required");
        errorMessages.push("Password is required");
        isValid = false;
    }

    if (isValid) {
        console.log("Form submitted successfully");
      
        const formData = {
            email,
            password,
          };
        console.log("Form data:", formData);
        


        setEmail("");
        setPassword("");
        alert("Form submitted successfully!");
        Navigate("/Homepage")
    } else {
        console.log("Form has errors, please correct them");
        alert(`Form submission failed. Please correct the following errors:\n${errorMessages.join("\n")}`);
    }


 
};

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  return (
    
    <div
    
      className="flex justify-center items-center "
      id={darkMode ? "dark-mode" : "light-mode "}
    >
      <div className="container flex flex-col w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all m-[50px]  w-[600px]  border-2 h-[475px] bg-transparent border-[(rgba(255,255,255,0.2))] rounded-lg items-center">

        <div className="header flex flex-col items-center gap-9px w-[100%] mt-[20px] relative ">
          <div className="main absolute top-3 left-11">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleDarkMode}
                checked={darkMode}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="text text-[#162938] text-[48px] font-[700]">
            Login
          </div>
          <div className="underline w-[60px] h-[6px] bg-[#162938] rounded-lg"></div>
        </div>

        <form
          className="form-inputs mt-[50px] flex flex-col justify-center items-center gap-[25px]"
        >
          <div className="inputs flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3   border-2 border-[rgba(41,36,189,0.267)] rounded-[40px]">
              <img className="px-4" src={emailicon} alt="email icon" />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none font-[#162938] text-[19px] placeholder:text-[#162938] placeholder:font-[500] "
                type="email"
                value={email}
                id="email"
                placeholder="Enter your email"
                onChange={handleEmail}
              />
            </div>

            <div className="showerror text-red-600 text-center">
              {emailError && <div className="error">{emailError}</div>}
            </div>
          </div>

          <div className="inputs flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3   border-2 border-[rgba(41,36,189,0.267)] rounded-[40px]">
              <img className="px-4" src={passwordicon} alt="password icon" />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none font-[#162938] text-[19px] placeholder:text-[#162938] placeholder:font-[500] "
                type="password"
                value={password}
                id="password"
                placeholder="Enter your password"
                onChange={handlePassword}
              />
            </div>

            <div className="showerror text-red-600 text-center">
              {passError && <div className="error">{passError}</div>}
            </div>
          </div>

          <div className="forgotpas pr-[250px] text-[15px] ">
            Forgot password?{" "}
            <span className="click text-[blue] cursor-pointer hover:text-[#4d4dde]">
              Click here
            </span>
          </div>

          <div className="submit-buttons flex gap-[20px] m-30px">
            <button
              type="submit" onClick={handleclick}
              className="submit  w-[220px] h-[59px] text-white bg-[#162938] rounded-[50px] text-[19px] font-[700] cursor-pointer "
             >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
