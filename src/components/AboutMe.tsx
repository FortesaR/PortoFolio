import React from 'react';
import foto from "../assets/image/Foto.jpg";
import Box from '@mui/material/Box';

const AboutMe: React.FC = () => {
  return (
    <div className="font-mono bg-violet-100 flex flex-col items-center justify-center gap-8 px-4 py-8 md:gap-16">
      <div className="relative">
        <h1 className="underline decoration text-customPurple p-0 px-3 md:px-6 text-3xl md:text-[60px] font-semibold text-center mt-4 md:mt-[60px] uppercase">About ME</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
        <div className="flex justify-center flex-shrink-0">
          <img 
            src={foto} 
            alt="About Me" 
            className="w-full max-w-xs md:max-w-[400px] h-auto max-h-[350px] rounded-lg shadow-lg m-5 md:mr-5"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 px-3 md:px-0">
          <div className="  font-mono text-sm md:text-base font-semibold text-justify text-gray-900">
            <p>
              As a passionate front-end developer, I specialize in transforming innovative ideas into engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I am adept at creating responsive designs that adapt seamlessly across devices. My keen eye for detail and commitment to clean, efficient code enable me to deliver high-quality solutions that enhance user interactions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
            <Box
              sx={{
                flex: 1,
                padding: 1.5,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <h2 className="text-base font-extrabold mb-2 text-customPurple">Education</h2>
              <h4 className="mb-1 text-violet-600 font-semibold">Gjimnazi Ulpiana</h4>
              <h5 className="mb-1">High School</h5>
              <h6 className="text-slate-600">2016-2019</h6>
              <hr className="border-0 h-1 bg-customPurple my-4" />
              <h4 className="mb-1 text-violet-600 font-semibold">Another Institution</h4>
              <h5 className="mb-1">Another Program</h5>
              <h6 className="text-slate-600">2019-2022</h6>
            </Box>
            <Box
              sx={{
                flex: 1,
                padding: 1.5,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <h2 className="text-base font-extrabold text-customPurple mb-2">Trainings</h2>
              <h4 className="mb-1 text-violet-600 font-semibold">React JavaScript Programming</h4>
              <h5 className="mb-1">Bit Academy</h5>
              <h6 className="text-slate-600">Aug 2023 - Dec 2023</h6>
              <hr className="border-0 h-1 bg-customPurple my-4" />
              <h4 className="text-violet-600 font-semibold mb-1">Another Training</h4>
              <h5 className="mb-1">Another Institution</h5>
              <h6 className="text-slate-600">Jan 2024 - Mar 2024</h6>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
