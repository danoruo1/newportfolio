import './App.css';
import logo from './images/logo.png';
import {Typography } from '@mui/material';

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
        <a href='/' className='navbartext'> Experiences </a>
        <a href='/' className='navbartext'> Projects </a>
        <a href='pdfs/Anoruo_CV.pdf' className='navbartext' target="_blank" rel="noopener noreferrer"> Resume_CV </a>

      </div>

      <Typography
      sx={{
        fontFamily:"hackerFont",
        fontSize:"50px",
        color:"white",
        '-webkit-text-stroke': '3px black',  
        visibility:"hidden"
      }}
      > Daniel Anoruo </Typography>


    </div>
  );
}

export default App;
