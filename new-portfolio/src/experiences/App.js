import React, { useState } from 'react';
import ProfilePicComponent from '../components';
import logo from '../images/logo.png';
import { Typography, Box, IconButton } from '@mui/material';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Cryptify",
    description: "Developed a secure messaging app using RSA, AES, and Caesar cipher."
  },
  {
    title: "Melody Map",
    description: "Built an AI-powered music recommendation system based on user mood."
  },
  {
    title: "Cybersecurity Club Database",
    description: "Designed a membership management system with access controls."
  },
  {
    title: "Baltimore Crime Analysis",
    description: "Led a machine learning project to predict crime patterns using data analysis."
  },
  {
    title: "Media Ministry",
    description: "Managed live-streaming services for church events using Zoom & YouTube."
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