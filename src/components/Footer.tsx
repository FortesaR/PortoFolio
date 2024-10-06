import React from 'react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="font-mono bg-customPurple text-white py-5 text-center">
      <div className="footer-content">
        <ul className="list-none p-0 flex flex-col md:flex-row justify-center">
          <li className="inline mx-2 my-2 md:mx-4">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="inline mx-2 my-2 md:mx-4">
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className="inline mx-2 my-2 md:mx-4">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="inline mx-2 my-2 md:mx-4">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="inline mx-2 my-2 md:mx-4">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4 text-sm">
        <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
