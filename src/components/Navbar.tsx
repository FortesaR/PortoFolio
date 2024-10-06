import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import logo from "../assets/image/FORT.png";
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className='font-mono bg-customPurple flex items-center justify-between navbar p-4 text-lg relative'>
      <img src={logo} alt="Logo" className="m-2 w-16 h-auto" />

     
      <div className="md:hidden cursor-pointer text-white" onClick={toggleMenu}>
        {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>

      <ul
        className={`md:flex items-center gap-12 text-xl text-white nav-menu absolute md:static left-0 top-28 bg-customPurple md:bg-transparent w-full md:w-auto p-4 md:p-0 transition-all duration-500 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>

    
      <div className="hidden md:block bg-gradient-to-r from-purple-600 to-blue-600 py-2 px-2 rounded-3xl text-white text-xl cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:nav-connect">
        <Link to="contact" smooth={true} duration={500}>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
