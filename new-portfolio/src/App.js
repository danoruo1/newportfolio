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

      <Typography
      sx={{
        fontFamily:"hackerFont",
        fontSize:"50px",
        color:"white",
        '-webkit-text-stroke': '3px black',  
        visibility:"hidden"
      }}
      > Daniel Anoruo </Typography>
      
      <ProfilePicComponent/>

      <Box sx={{
            width:"15vw",
            height:"25vh",
            top:"30px",
            left:"35px",
            position:"relative",
            alignItems:"center",
            justifyItems:"center",
            backgroundColor:"transparent",
            borderRadius:"6px"
        }}>
            <Typography sx={{color:"white", 
        fontFamily:"hackerFont",fontWeight:"bold"
      }}> Hello, I am Daniel Anoruo.

      <br/>
      <br/>

      🎓Computer Science Major
      <br/>
      <br/>
      🔐CyberCorps SFS Student 
      
      </Typography>


      </Box>
      <Box
        sx={{
          width: "70vw",
          height: "60vh",
          top: "-470px",
          left: "350px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          padding: "2vh",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          overflow:"auto"
        }}
        className="frame"
      >
        <Typography 
          variant="h3" 
          sx={{ fontSize: "4vh", fontWeight: "bold", marginBottom: "2vh", fontFamily: "hackerFont" }}
        >
          About Me
        </Typography>
        <Typography 
          sx={{ 
            fontSize: "2.5vh", 
            marginBottom: "3vh", 
            fontFamily: "hackerFont", 
            textAlign: "center", 
            maxWidth: "80%", 
            lineHeight: "1.5",
            color:"white"
          }}
        >
          I'm deeply passionate about Computer Science, particularly in the fields of **Artificial Intelligence (AI), 
          Machine Learning (ML), and Software Development.
          <br/>
          <br/>

           I enjoy building intelligent systems that solve real-world 
          problems and leveraging data-driven approaches to uncover patterns and make predictions. 
          
          <br/>
          <br/>
          My expertise lies in 
          developing secure, scalable applications while continuously exploring the intersection of cybersecurity and AI. 
          Through my projects, I aim to push the boundaries of innovation, whether it's enhancing security, analyzing trends, 
          or creating impactful technology solutions.
        </Typography>
      </Box>



     



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
            <img src='./github.svg' alt="" height={20} width={20}style={{top:"150px",position:"sticky",opacity:"0"}}></img>
            <a className='navbarText' href='https://github.com/danoruo1' style={{fontFamily:"hackerFont", color:"white"}}> Github </a>
        </Box>

        <Box sx={{
          background:"transparent",
        }}>
            <img src='./linkedin.webp' alt="" height={20} width={20}style={{top:"150px",position:"sticky",opacity:"0"}}></img>
            <a className='navbarText' href='https://www.linkedin.com/in/daniel-anoruo-b05097268' style={{fontFamily:"hackerFont", color:"white"}}> Linkedin </a>
        </Box>

        <Box sx={{
          background:"transparent",
        }}>
            <img src='./email.jpg' alt="" height={20} width={20}style={{top:"0px",position:"sticky",opacity:"0"}}></img>
            <a className='navbarText' href='mailto:danoruo1@students.towson.edu' style={{fontFamily:"hackerFont", color:"white"}}> danoruo1@students.towson.edu </a>
        </Box>

      </footer>





    </div>
  );
}

export default App;
