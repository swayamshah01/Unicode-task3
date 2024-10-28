import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate  } from "react-router-dom";


const Homepage = ({userData}) => { 
  console.log("Homepage");
  console.log(userData);
  const Navigate = useNavigate();
  const handleLogout = () => {
    Navigate("/")
  }
  return (
    <div>
      <div className="Home-screen  w-[100%] h-[50px]">
        <header className='p-[20px] flex justify-between bg-[#fff] border-b-2 border-[#ddd]'>
            <h3>System name</h3>
           <button onClick={handleLogout} className='text-[#007dfe] decoration-none cursor-pointer font-bold '>Logout</button>

        </header>
        <div className="page-content bg-[#ededed] h-[calc(100vh-50px)] flex items-center justify-center">
            <div className="user-card bg-[#fff] rounded p-[20px] min-h-[200px] w-[400px]">
                <img src="" alt="avtar" className='w-[100px] h-[100px] my-5 mx-auto rounded-[50px]' />
                <h3 className='text-[#007dfe] mb-[24px]'>{userData.name}</h3>
                <div className="user-met ">
                    <p className='mb-2'>
                        <span className='inline-block min-w-[100px] text-[#6e6e6e] text-[15px]'>username</span>
                        <span className='text-[#333] text-[16px]'>{userData.name}</span>
                   </p>
                   <p>
                    <span  className='inline-block min-w-[100px] text-[#6e6e6e] text-[15px]'>email</span>
                    <span className='text-[#333] text-[16px]'>{userData.email}</span>
                   </p>
                   <p>
                    <span  className='inline-block min-w-[100px] text-[#6e6e6e] text-[15px]'>Number</span>
                    <span className='text-[#333] text-[16px]'>{userData.phonenumber}</span>
                   </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
