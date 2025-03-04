import React, { useState } from 'react';
import ProfilePicComponent from '../components';
import logo from '../images/logo.png';
import { Typography, Box, IconButton } from '@mui/material';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Image Predictor Web Application",
    description: "Developed a neural network using PyTorch to predict images, training it on a large dataset to enhance accuracy. Deployed the frontend built with Next.js on Vercel and the backend on Railway, utilizing FastAPI and Python for executing the neural network.",
    githubLink: "https://github.com/danoruo1/image-prediction/",
    Dependencies: "Next.js, Node.js, Python, FastAPI, PyTorch, Railway, Vercel"
  },
  {
    title: "Encryption/Decryption Web Application (Cryptify)",
    description: "Built a web application where users can post encrypted messages for others to practice decrypting. Implemented encryption and decryption features using React, Node.js, and PyCryptodome, ensuring robust security and an interactive user experience.",
    githubLink: "https://github.com/danoruo1/Cryptify/tree/main/cryptify",
    Dependencies: "Next.js, Node.js, Python, PyCryptodome, Firebase, React"
  },
  {
    title: "Cybersecurity Club Database Manager",
    description: "Designed a full-stack web application using React and MySQL for managing club member profiles, meetings, and events. Developed a dynamic UI with Material-UI, including a sidebar for table selection and a query editor for executing SQL commands.",
    githubLink: "https://github.com/danoruo1/CyberClub_DatabaseProject_COSC457",
    Dependencies: "React, MySQL, JavaScript, Material-UI, Node.js"
  },
  {
    title: "CourseSight",
    description: "Collaborated on developing CourseSight, a platform designed for improved course feedback. Leveraged software development and data analytics to enhance student decision-making, while strengthening teamwork and problem-solving skills in a high-pressure environment.",
    Dependencies: "Next.js, Node.js, MongoDB, React"
  }
];


function Projects() {
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
        <a href='pdfs/Anoruo_CV.pdf' className='navbartext' target="_blank" rel="noopener noreferrer"> Resume/CV </a>
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
        <ProfilePicComponent />

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
          \n
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontFamily: "Montserrat", color: "white", lineHeight: "1.5" }}>
            Dependencies: {projects[currentProjectIndex].Dependencies}
          </Typography>
          {(projects[currentProjectIndex].githubLink &&  <a href={projects[currentProjectIndex].githubLink} style={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontFamily: "Montserrat", color: "white", lineHeight: "1.5" }}>
            Source Code: {projects[currentProjectIndex].githubLink}
          </a>)}
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

export default Projects;