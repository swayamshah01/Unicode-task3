
import logo_light from "../assets/logo-black.png";
import logo_dark from "../assets/logo-white.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import {Link} from "react-router-dom"


const Navbar = (theme,setTheme) => {
 
 const  handleThemeChange = () => {
    (theme == 'light' ?  setTheme('dark') : setTheme('light'))

  }

  return (
    
    <div className="w-[100%] flex items-center justify-between bg-white py-[15px] px-[7%]" >
     <Link to="/"> <img className="w-[160px]" src={theme =='light' ? logo_dark : logo_light} alt="logo" /></Link>

      <ul className="flex-1 text-center ">
        <li className='inline-block my-[10px] mx-[20px] text-[18px]cursor-pointer text-[black]'><Link to="/">home</Link></li>
        <li  className='inline-block my-[10px] mx-[20px] text-[18px]cursor-pointer text-[black]'><Link to="/products">products</Link></li>
        <li  className='inline-block my-[10px] mx-[20px] text-[18px]cursor-pointer text-[black]'><Link to="/features">features</Link></li>
        <li  className='inline-block my-[10px] mx-[20px] text-[18px]cursor-pointer text-[black]' ><Link to="/aboutus">aboutus</Link></li>
      </ul>

      <div className="flex mx-1 gap-2 items-center ">
        <Link to="/Signup"><button className="p-[10px] text-black border-[2px] rounded-lg">Sign up</button></Link>
      <Link to="/login"> <button className="p-[10px] text-black border-[2px] rounded-lg">Log in</button></Link>
      </div>
      <img onClick={handleThemeChange} src={theme == 'light' ? toggle_dark : toggle_light} alt="toggle icon" className="w-[40px] ml-[40px]" />
    </div>
  );
};

export default Navbar; 
