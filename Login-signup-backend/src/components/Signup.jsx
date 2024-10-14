import React, { useState } from "react";
import "./Slider.css";
import "./LightDark.css"
import emailicon from "../assets/email.png";
import personicon from "../assets/person.png";
import passwordicon from "../assets/password.png";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = ({ darkMode, setDarkMode }) => {
  let Navigate= useNavigate();
  const checkuser = /^[A-Za-z. ]{3,30}$/;
  const mobilecheck = /^[0-9]{10}$/;
  const emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phonenumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  const handleName = (e) => {
    const name_u = e.target.value;
    setName(name_u);
    if (name_u && !checkuser.test(name_u)) {
      setNameError(
        "Invalid username (3-30 characters, letters, spaces, and dots only)"
      );
    } else {
      setNameError("");
    }
  };

  const handleEmail = (e) => {
    const email_u = e.target.value;
    setEmail(email_u);
    if (email_u && !emailcheck.test(email_u)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNumber = (e) => {
    const phonenumber_u = e.target.value;
    setPhoneNumber(phonenumber_u);
    if (phonenumber_u && !mobilecheck.test(phonenumber_u)) {
      setPhoneError("Invalid phone number (10 digits required)");
    } else {
      setPhoneError("");
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
    if (confirmPassword && pass_u !== confirmPassword) {
      setConfirmPassError("Passwords do not match");
    } else {
      setConfirmPassError("");
    }
  };

  const handleConfirmPassword = (e) => {
    const confirmPass = e.target.value;
    setConfirmPassword(confirmPass);
    if (confirmPass && confirmPass !== password) {
      setConfirmPassError("Passwords do not match");
    } else {
      setConfirmPassError("");
    }
  };

  const handleclick = (e) => {
    e.preventDefault();
    let isValid = true;
    let errorMessages = [];

    //checking regex
    if (emailError ||  passError || confirmPassError ||  phoneError ||  nameError) {


      isValid = false;
      errorMessages.push("Please fix all validation errors before submitting.");
  }
    if (!email) {
      setEmailError("Email is required");
      errorMessages.push("Email is required");
      isValid = false;
    }

    if (!name) {
      setNameError("Name is required");
      errorMessages.push("Name is required");
      isValid = false;
    }
    if (!phonenumber) {
      setPhoneError("Phone number is required");
      errorMessages.push("Phone number is required");
      isValid = false;
    }
    if (!confirmPassword) {
      setConfirmPassError("Please confirm your password");
      errorMessages.push("Password confirmation is required");
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
        name,
        phonenumber,
      };
      console.log("Form data:", formData);



      setName("");
      setPhoneNumber("");
      setConfirmPassword("");

      setEmail("");
      setPassword("");
      alert("Form submitted successfully!");
      Navigate("/Homepage")
    } else {
      console.log("Form has errors, please correct them");
      alert(
        `Form submission failed. Please correct the following errors:\n${errorMessages.join(
          "\n"
        )}`
      );
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="flex justify-center items-center mb-3"
      id={darkMode ? "dark-mode" : "light-mode "}
    >
      <div className="container flex flex-col w-[100vw]  max-w-full m-0 p-0 overflow-x-hidden transition-all m-[50px]  w-[650px]  border-2 bg-transparent  border-[(rgba(255,255,255,0.2))] rounded-lg items-center">
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
            Sign-up
          </div>
          <div className="underline  w-[60px] h-[6px] bg-[#162938] rounded-lg"></div>
        </div>

        <form
          className="form-inputs form-inputs mt-[50px] flex flex-col justify-center items-center gap-[25px]"
          
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

          <div className="inputs flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3   border-2 border-[rgba(41,36,189,0.267)] rounded-[40px]">
              <img className="px-4" src={personicon} alt="password icon" />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none font-[#162938] text-[19px] placeholder:text-[#162938] placeholder:font-[500] "
                type="text"
                value={name}
                id="username"
                placeholder="Enter your Name"
                onChange={handleName}
              />
            </div>

            <div className="showerror text-red-600 text-center">
              {nameError && <div className="error">{nameError}</div>}
            </div>
          </div>

          <div className="inputs flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3   border-2 border-[rgba(41,36,189,0.267)] rounded-[40px]">
              <img className="px-4" src={passwordicon} alt="password icon" />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none font-[#162938] text-[19px] placeholder:text-[#162938] placeholder:font-[500] "
                type="password"
                value={confirmPassword}
                id="confirm-password"
                placeholder="Confirm your password"
                onChange={handleConfirmPassword}
              />
            </div>

            <div className="showerror text-red-600 text-center">
              {confirmPassError && (
                <div className="error">{confirmPassError}</div>
              )}
            </div>
          </div>

          <div className="inputs flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3   border-2 border-[rgba(41,36,189,0.267)] rounded-[40px]">
              <img className="px-4" src={passwordicon} alt="password icon" />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none font-[#162938] text-[19px] placeholder:text-[#162938] placeholder:font-[500] "
                type="tel"
                value={phonenumber}
                id="password"
                placeholder="Enter your phonr number"
                onChange={handlePhoneNumber}
              />
            </div>

            <div className="showerror text-red-600 text-center">
              {phoneError && <div className="error">{phoneError}</div>}
            </div>
          </div>

          <div className="inputs flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3   border-2 border-[rgba(41,36,189,0.267)] rounded-[40px]">
              <img className="px-4" src={passwordicon} alt="password icon" />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none font-[#162938] text-[19px] placeholder:text-[#162938] placeholder:font-[500] "
                type="date"
                required
                id="date"
              />
            </div>
          </div>

          <p className=" forgotpas pr-[250px] text-[15px] ">
            Already have an account?{" "}
            <button
              type="button"
              className="hrefbutton  text-[blue] cursor-pointer hover:text-[#4d4dde]"
            >
              <Link to="/login"> Login </Link>
            </button>
          </p>

          <div className="submit-buttons  flex gap-[20px] m-30px">
            <button
              type="submit"
              className="submit  w-[220px] h-[59px] text-white bg-[#162938] rounded-[50px] text-[19px] font-[700] cursor-pointer "
            onClick={handleclick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
