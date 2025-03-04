import React, { useState } from 'react';
import logo from '../images/logo.png';
import datascience from '../images/datascience.jpg'
import research from '../images/research.jpg'
import hackathon from '../images/hackathon.png'
import { Typography, Box, IconButton } from '@mui/material';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [research,datascience,hackathon]
const projects = [
  {
    title: "Purdue Research Intern",
    description: "As an undergraduate researcher at Purdue University, I had the opportunity to engage in a computational research project that focused on simulating complex systems through the use of Linux-based tools and high-performance computing. The primary goal of this research was to perform computational calculations that could model various physical and engineering systems. I was responsible for running simulations, analyzing results, and assisting in the optimization of code for more efficient processing. My work involved utilizing various programming languages and computational tools to ensure the accuracy and speed of the simulations. Additionally, I contributed to data collection and cleaning, as well as interpreting the results in the context of real-world applications. Throughout this research experience, I developed a deeper understanding of computational methods, data analysis, and problem-solving in a scientific context. This project sharpened my technical skills in Linux terminal operations, as well as my ability to work with large datasets, and it also gave me valuable insights into how computational research can advance understanding in fields like engineering and physics."
  },
  {
    title: "Undergraduate Student Researcher",
    description: "As an undergraduate researcher, I was involved in a data-driven project with the Baltimore Data Science Corps at Towson University, focused on investigating the correlation between the proximity of vacant properties, homeless shelters, and crime in Baltimore. The project aimed to identify patterns and predict areas where crime is most likely to occur using machine learning algorithms. I contributed to the project by cleaning and preparing the data, ensuring its accuracy and completeness before feeding it into the algorithm. I also helped analyze the results to understand how socio-economic factors might influence crime rates. Throughout the process, I gained valuable experience in data analysis, machine learning, and the application of AI to real-world problems, as well as honed my ability to work with large datasets and use statistical tools for meaningful insights. This research not only deepened my technical skills but also gave me an understanding of how data science can be applied to social issues like urban crime, and how such insights can inform public policy and improve community safety"
  },
  {
    title: "Hackathon Contributor: StarTUP 2nd Place Runner Up",
    description: "As a participant in StarTUP, I collaborated with a talented team to develop CourseSight, a platform designed to provide better, more accessible course feedback. Using software development and data analytics, we created a system to gather, analyze, and present feedback in a way that helps students make informed decisions about their courses and professors. This experience allowed me to apply my skills in both development and data analysis, while also strengthening my ability to work under pressure and collaborate effectively within a fast-paced team environment."
  }
];

function Experience() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div style={{
      backgroundColor: "blue",
      backgroundImage: "linear-gradient(to right, #1e3c72, #2a5298)",
      minHeight: "100vh",
      width: "100%",
      backgroundSize: "cover",
      boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.25)',
      overflow: "auto"
    }}>

      <div className='navbar'>
        <img src={logo} className='logo' alt="Logo" />
        <a href='/' className='navbartext'> Home </a>
        <a href='/experiences' className='navbartext'> Experiences </a>
        <a href='/projects' className='navbartext'> Projects </a>
        <a href='pdfs/Anoruo_CV.pdf' className='navbartext' target="_blank" rel="noopener noreferrer"> Resume_CV </a>
      </div>

      <div style={{
        width: "100%",
        minHeight: "80vh",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
     <img src={images[currentProjectIndex]} alt="Research" style={{
          width: "100%",
          height: "auto", // keeps aspect ratio
          maxWidth: "500px", // maximum width to make it rectangular
          objectFit: "cover", // ensures it covers the area without distortion
          borderRadius: "10px",
          marginBottom: "20px",
          
        }} />
        <Box sx={{
          width: { xs: "90%", sm: "80%", md: "70%" },
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "20px",
          position: "relative"
        }}>
            <IconButton 
              onClick={handlePrevious} 
              style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "white" }}
            >
              <FaChevronLeft />
            </IconButton>
            <IconButton 
              onClick={handleNext} 
              style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "white" }}
            >
              <FaChevronRight />
            </IconButton>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, fontWeight: "bold", marginBottom: "2vh", fontFamily: "Montserrat" }}>
            {projects[currentProjectIndex].title}
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontFamily: "Montserrat", color: "white", lineHeight: "1.5" }}>
            {projects[currentProjectIndex].description}
          </Typography>
        </Box>
      </div>

      <footer style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        alignItems: "center",
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        gap: "20px"
      }}>
        <Box>
          <a href='https://github.com/danoruo1' style={{ fontFamily: "Montserrat", color: "white", textDecoration: "none" }}> Github </a>
        </Box>
        <Box>
          <a href='https://www.linkedin.com/in/daniel-anoruo-b05097268' style={{ fontFamily: "Montserrat", color: "white", textDecoration: "none" }}> Linkedin </a>
        </Box>
        <Box>
          <a href='mailto:danoruo1@students.towson.edu' style={{ fontFamily: "Montserrat", color: "white", textDecoration: "none" }}> Email </a>
        </Box>
      </footer>
    </div>
  );
}

export default Experience;