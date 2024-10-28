
import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HideNavbar from "./components/HideNavbar";
import Homepage from "./components/Homepage";
function App() {
  const [userData,setUserData] = useState([]);
  const [darkmode, setDarkMode] = useState(false);
  const [theme,setTheme] = useState('light')
  return (
    <div className=" min-h-screen w-[100vw] max-w-full m-0 p-0 overflow-x-hidden overflow-y-auto transition-all container bg-[#ced8ff]">
      <HideNavbar>    
         <Navbar theme={theme} setTheme={setTheme} />
      </HideNavbar>
 
      <Routes>
        <Route path="/login" element={<Login darkMode={darkmode} setDarkMode={setDarkMode}  />}  />
        <Route path="/Signup" element={<Signup darkMode={darkmode} setDarkMode={setDarkMode} userData={userData} setUserData={setUserData}/> }  />
        <Route path="/Homepage"  element={<Homepage userData={userData} />}  />
      </Routes>
  
    </div>
  );
}

export default App;
