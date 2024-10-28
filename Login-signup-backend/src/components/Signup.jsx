import React, { useState } from "react";
import "./Slider.css";
import "./LightDark.css";
import emailicon from "../assets/email.png";
import personicon from "../assets/person.png";
import passwordicon from "../assets/password.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../Api get/Axios";

const Signup = ({ darkMode, setDarkMode, userData, setUserData }) => {
  let Navigate = useNavigate();
  const checkname = /^[A-Za-z. ]{3,30}$/;
  const emailcheck =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const checkUser =/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
  const checkDate = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/

  const [Username, setUserName] = useState("");
  const [UsernameError, setUserNameError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setnameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phonenumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const[date,setDate] = useState("");
  const[dateError, setDateError] = useState("");

  const getdata = async () => {
    const response = await axios.post(
      "https://auth-backend-138t.onrender.com/api/v1/users/register",
      { email: email, password: password , name: name , username:Username ,  phonenumber:phonenumber , date:date});
    console.log(response);
  };

  const handleDate = (e) =>{
    const date_u = e.target.value;
    setDate(date_u);
    if(date_u &&  !checkDate.test(date_u)){
      setDateError("enter date in dd/mm/yyyy format");
    }
    else{
      setDateError("");
    }
  };

  const handleUsername = (e) => {
    const username_u = e.target.value;
    setUserName(username_u);
    if (username_u && !checkUser.test(username_u)) {
      setUserNameError("username unavailable");
    } else {
      setUserNameError("");
    }
  };

  const handleName = (e) => {
    const name_u = e.target.value;
    setName(name_u);
    if (name_u && !checkname.test(name_u)) {
      setnameError(
        "Invalid username (3-30 characters, letters, spaces, and dots only)"
      );
    } else {
      setnameError("");
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
  };

  const handleclick = (e) => {
    e.preventDefault();
    let isValid = true;
    let errorMessages = [];

    //checking regex
    if (emailError || passError || UsernameError || phoneError || nameError || dateError) {
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


    if (!password) {
      setPassError("Password is required");
      errorMessages.push("Password is required");
      isValid = false;
    }

    if(!date){
      setDateError("Date  is required");
      errorMessages.push("Date is required");
      isValid=false;
    }

    if (isValid) {
      console.log("Form submitted successfully");

      const formData = [
        {
          email,
          password,
          name,
          phonenumber,
          date,
        },
      ];
      console.log("Form data:", formData);
      setUserData(formData);

      getdata();

      setName("");
      setPhoneNumber("");

      setEmail("");
      setPassword("");
      setDate("")
      alert("Form submitted successfully!");
      Navigate("/Homepage");
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

        <form className="form-inputs form-inputs mt-[50px] flex flex-col justify-center items-center gap-[25px]">
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
              <img className="px-4" src={passwordicon} alt="password icon" />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none font-[#162938] text-[19px] placeholder:text-[#162938] placeholder:font-[500] "
                type="text"
                value={Username}
                id="usernaame"
                placeholder="Enter Username"
                onChange={handleUsername}
              />
            </div>

            <div className="showerror text-red-600 text-center">
              {UsernameError && <div className="error">{UsernameError}</div>}
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
                type="text"
                value={date}
                id="date"
                placeholder="Enter date"
                onChange={handleDate}
              />
            </div>
            <div className="showerror text-red-600 text-center">
              {dateError && <div className="error">{dateError}</div>}
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
              onClick={handleclick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
