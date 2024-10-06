import React, { useState, useEffect } from 'react';
import imageSrc from '../assets/image/fotoR.jpg';
import Button from '@mui/material/Button';
import cvFile from "../assets/File/FortesaCV.pdf";
import Fade from '@mui/material/Fade';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="font-mono flex flex-col items-center gap-7 bg-violet-100 px-3 md:px-0 hero">
      
      <Fade in={showContent} timeout={800}>
        <img 
          src={imageSrc} 
          alt="Fortesa Reqica" 
          className="mt-12 md:mt-16 w-36 md:w-48 h-auto drop-shadow-2xl rounded-full" 
        />
      </Fade>
      
      <Fade in={showContent} timeout={1200}>
        <h1 className=" font-mono text-center text-3xl md:text-5xl font-semibold leading-tight w-full md:w-3/4 lg:w-1/2">
          <span className="bg-clip-text">I'm Fortesa Reqica,</span> 
          <br />
          a frontend developer based in Kosova
        </h1>
      </Fade>

      <Fade in={showContent} timeout={1500}>
        <p className=" font-mono text-center text-lg md:text-xl w-full md:w-3/4 lg:w-1/2">
          A passionate student in web development with knowledge gained from completing courses in React.
        </p>
      </Fade>

      <Fade in={showContent} timeout={1800}>
        <div className="flex flex-col md:flex-row gap-4 mt-4 mb-10 hero-action w-full md:w-auto items-center justify-center">
        <Link 
            to="contact" 
            smooth={true}  
            duration={800} 
          >
          <Button
            variant="contained"
            color="secondary"
            className="bg-customPurple hover:bg-violet-800 text-white rounded-full"
            sx={{
              py: 1.5,            
              px: 3.5,            
              fontSize: '1rem',
              borderRadius: '50px',
              minWidth: '140px',  
            }}
          >
            Contact Me
          </Button>
          </Link>
          
          <Button
            variant="contained"
            color="secondary"
            className="bg-customPurple hover:bg-violet-800 text-white rounded-full"
            sx={{
              py: 1.5,
              px: 3.5,
              fontSize: '1rem',
              borderRadius: '50px',
              minWidth: '140px',
            }}
            href={cvFile}
            download
          >
            My Resume
          </Button>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
