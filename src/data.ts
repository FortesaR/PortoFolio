import atlasImage from './assets/image/atlas.png';
import edmaImage from './assets/image/Edma.png';
import portfolioImage from './assets/image/portfolio.png';
import project4Gif from './assets/image/project-4.gif';

type  Project = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
  }
export const projects: Project[] = [
  {
    
    title: "Atlas Project",
    subtitle: "React Sass",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: atlasImage, 
    link: "https://github.com/",
  },
  {
    title: "Edma Project",
    subtitle: "React and Sass",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: edmaImage,
    link: "https://github.com/",
  },
  {
    title: "DevChat",
    subtitle: "React and Gatsby",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: portfolioImage,
    link: "https://serene-heliotrope-1acba1.netlify.app/",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: portfolioImage,
    link: "https://github.com/",
  },
];
