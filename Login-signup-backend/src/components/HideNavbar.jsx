import React from 'react'
import { useLocation } from "react-router-dom";
import { useState,useEffect } from 'react';
const HideNavbar = ({children}) => {

    const location  = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
     console.log("location :" ,location)
    if(location.pathname==='/login'  || location.pathname==='/Signup' || location.pathname==='/Homepage'){

      setShowNavbar(false)
    }
    else{
      setShowNavbar(true)
    }
      
    }, [location])
  return (
    <div>
      {showNavbar && children}
    </div>
  )
}

export default HideNavbar
