import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { RiReactjsLine, RiGatsbyFill } from 'react-icons/ri';
import { SiJavascript, SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

interface SkillValues {
  [key: string]: number;
}

const Skills: React.FC = () => {
  const skillValues: SkillValues = {
    "HTML & CSS": 90,
    "React JS": 60,
    "JavaScript": 55,
    "Gatsby": 40,
  };

  const valuetext = (value: number) => {
    return `${value}%`;
  };

  const iconVariant = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className=" font-mono about-skills flex flex-col items-center justify-center bg-violet-100 py-8 px-4">
      <h1 className="underline decoration p-0 px-6 text-3xl md:text-[60px] font-semibold text-center mt-[40px] text-customPurple mb-14 uppercase">Skills</h1>
      <p className="text-base md:text-lg font-medium text-gray-900 mb-8 text-center">Here is a list of technologies I've worked with:</p>

      <div className="skills-container w-full max-w-xl space-y-5">
        {Object.keys(skillValues).map((skill) => (
          <div key={skill} className="about-skill mb-4 transform transition duration-200 hover:scale-105">
            <p className="font-semibold text-base text-gray-700 text-center mb-4">{skill}</p>
            <Box sx={{ width: '100%' }} className="mt-2">
              <Slider
                aria-label={skill}
                value={skillValues[skill]}
                getAriaValueText={valuetext}
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
                sx={{ color: '#433878' }}
              />
            </Box>
          </div>
        ))}

        <div className="font-mono pb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
            <motion.div
              variants={iconVariant(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-customPurple p-3">
              <RiReactjsLine className="text-6xl text-cyan-400" />
            </motion.div>
            <motion.div
              variants={iconVariant(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-customPurple p-3">
              <SiJavascript className="text-6xl text-yellow-400" />
            </motion.div>
            <motion.div
              variants={iconVariant(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-customPurple p-3">
              <SiHtml5 className="text-6xl text-red-500" />
            </motion.div>
            <motion.div
              variants={iconVariant(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-customPurple p-3">
              <FaCss3Alt className="text-6xl text-blue-800" />
            </motion.div>
            <motion.div
              variants={iconVariant(6)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-customPurple p-3">
              <RiGatsbyFill className="text-6xl text-violet-900" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
