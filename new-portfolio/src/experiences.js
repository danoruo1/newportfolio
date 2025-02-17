import './App.css';
import ProfilePicComponent from './components';
import logo from './images/logo.png';
import {Typography, Box } from '@mui/material';
function App() {

  

  return (
    <div style={{
      backgroundColor:"blue",
      backgroundImage: "linear-gradient(to right, #1e3c72, #2a5298)",
      height:"100vh",
      width:"100vw",
      background:"cover",
      boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.25)', // Custom box shadow
      overflow:"auto"
    }}>


      <div className='navbar'>
        <img src={logo} className='logo' alt="Logo" />
        <a href='/' className='navbartext'> Home </a>
        <a href='/experiences' className='navbartext'> Experiences </a>
        <a href='/' className='navbartext'> Projects </a>
        <a href='pdfs/Anoruo_CV.pdf' className='navbartext' target="_blank" rel="noopener noreferrer"> Resume_CV </a>

      </div>


     



      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          backgroundColor:"black",
          alignItems: "center",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
          zIndex: 1000, // Ensures it stays on top
          gap: 70

        }}
      >
        <Box sx={{
          background:"transparent",
        }}>
            <img src='./github.svg' alt="" height={20} width={20}style={{top:"150px",position:"sticky"}}></img>
            <a className='navbarText' href='https://github.com/danoruo1' style={{fontFamily:"hackerFont", color:"white"}}> Github </a>
        </Box>

        <Box sx={{
          background:"transparent",
        }}>
            <img src='./linkedin.webp' alt="" height={20} width={20}style={{top:"150px",position:"sticky"}}></img>
            <a className='navbarText' href='https://www.linkedin.com/in/daniel-anoruo-b05097268' style={{fontFamily:"hackerFont", color:"white"}}> Linkedin </a>
        </Box>

        <Box sx={{
          background:"transparent",
        }}>
            <img src='./email.jpg' alt="" height={20} width={20}style={{top:"0px",position:"sticky"}}></img>
            <a className='navbarText' href='mailto:danoruo1@students.towson.edu' style={{fontFamily:"hackerFont", color:"white"}}> danoruo1@students.towson.edu </a>
        </Box>

      </footer>





    </div>
  );
}

export default App;
