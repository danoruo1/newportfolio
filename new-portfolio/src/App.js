import './App.css';
import ProfilePicComponent from './components';
import logo from './images/logo.png';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';



function App() {

  return (
    <div style={{
      backgroundColor: "blue",
      backgroundImage: "linear-gradient(to right, #1e3c72, #2a5298)",
      minHeight: "100vh",
      width: "100%",
      backgroundSize: "cover",
      boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.25)',
      overflowX: "auto"
    }}>

      <div className='navbar'>
        <img src={logo} className='logo' alt="Logo" />
        <a href='/' className='navbartext'> Home </a>
        <Link to="/experiences" className='navbartext'>
          Experiences
        </Link>
        <Link to="/projects" className='navbartext'>
          Projects
        </Link>
        <a href='pdfs/Anoruo_CV.pdf' className='navbartext' target="_blank" rel="noopener noreferrer"> Resume_CV </a>
      </div>

      <div style={{
        width: "100%",
        minHeight: "80vh",
        padding: "20px",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <ProfilePicComponent />

        <Box sx={{
          width: { xs: "90%", sm: "70%", md: "50%" },
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "6px",
          textAlign: "center",
          marginBottom: "20px"
        }}>
          <Typography sx={{ color: "white", fontFamily: "Montserrat", fontWeight: "bold" }}>
          👋 Hello, I am Daniel Anoruo.
            <br />
            <br />
            🎓 Computer Science Major (3.52/4.0 GPA)
            <br />
            <br />
            🔐 CyberCorps SFS Student
          </Typography>
        </Box>

        <Box sx={{
          width: { xs: "90%", sm: "80%", md: "70%" },
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, fontWeight: "bold", marginBottom: "2vh", fontFamily: "Montserrat" }}>
            About Me
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontFamily: "Montserrat", color: "white", lineHeight: "1.5" }}>
            I'm deeply passionate about Computer Science, particularly in the fields of Artificial Intelligence (AI), Machine Learning (ML), and Software Development.
            <br />
            <br />
            I enjoy building intelligent systems that solve real-world problems and leveraging data-driven approaches to uncover patterns and make predictions.
            <br />
            <br />
            My expertise lies in developing secure, scalable applications while continuously exploring the intersection of cybersecurity and AI. Through my projects, I aim to push the boundaries of innovation, whether it's enhancing security, analyzing trends, or creating impactful technology solutions.
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

export default App;