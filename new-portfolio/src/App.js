import './App.css';
import ProfilePicComponent from './components';
import { Typography, Box, Button } from '@mui/material';
import Typewriter from 'typewriter-effect';
import NameBox from './component2';
import Projects from './projects';
import TimeLine from './experiences';
import overlay from './photos/overlay.png'
function App() {

  

  return (
    <div style={{
      backgroundImage: "linear-gradient(to right,rgb(0, 0, 0),rgb(34, 34, 34))",
      minHeight: "100vh",
      width: "100%",
      backgroundSize: "cover",
      boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.25)',
      overflow: "auto",
      position:"relative",
      scrollBehavior:"smooth"
    }}>



      <div className='navbar' style={{fontWeight:"bold", textShadow:"2px 2px 2px black", backgroundImage: "linear-gradient(to right,rgb(0, 0, 0),rgb(8, 6, 6))"}}>
       
        <Typography className="navbartext" sx={{ fontSize: { xs: "1.25rem", sm: "1.75rem" }, fontWeight: "bold",  fontFamily: "Montserrat" , color:"white", textShadow:"4px 4px 4px black"}}>Home</Typography >
        <Typography className="navbartext" sx={{ fontSize: { xs: "1.25rem", sm: "1.75rem" }, fontWeight: "bold", fontFamily: "Montserrat" , color:"white", textShadow:"4px 4px 4px black"}}>Experiences</Typography>
        <Typography className="navbartext" sx={{ fontSize: { xs: "1.25rem", sm: "1.75rem" }, fontWeight: "bold", fontFamily: "Montserrat" , color:"white", textShadow:"4px 4px 4px black"}}>Projects</Typography>
        <a href='pdfs/Anoruo_CV.pdf' className='navbartext' target="_blank" rel="noopener noreferrer"> Resume/CV </a>
        <div style={{height:"6vh"}}>

        </div>
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
        justifyContent: "center",
        marginBottom:"15vh"
      }}>
        <ProfilePicComponent />

        <Box sx={{
          width: { xs: "90%", sm: "70%", md: "50%" },
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "6px",
          textAlign: "center",
          marginBottom: "20px",
          textShadow:"2px 2px 2px black",
          marginTop: "20px",
          border:"4px solid black",
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
          textAlign: "center",
          border:"4px solid black",
          overflow:"auto"
        }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, fontWeight: "bold", marginBottom: "2vh", fontFamily: "Montserrat" , color:"white", textShadow:"2px 2px 2px black"}}>
            About Me
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontFamily: "Montserrat", color: "white", lineHeight: "1.5",fontWeight:"bold",textShadow:"2px 2px 2px black"}}>


          Rising Senior at Towson University, majoring in Computer Science with a concentration in Cybersecurity.
          <br></br>
          <br></br>

          The topics in CS I am interested in range from:         
           <Typewriter
              options={{
                strings: ['Cybersecurity', 'High Performance Computing', 'Software Engineering', 'Machine Learning', 'Artificial Intelligence', 'Reverse Engineering'],
                autoStart: true,
                loop: true,
              }}
              
            />

            <br></br>
            My Hobbies are:
            <Typewriter
              options={{
                strings: ['Going to the Gym','Working on Side Projects', 'Listening to Music','Exploring new areas', 'Networking'],
                autoStart: true,
                loop: true,
              }}
              
            />


            </Typography>
        </Box>
      </div>

      <div style={{height:"22vh",width:"100vw", backgroundColor:"rgba(1, 15, 78, 0.94)",marginTop:"5vh", display:"flex",alignItems:"center",overflow:"auto",border:"6px solid black"}}>
      <Typography variant="h3" sx={{ fontSize: { xs: "5rem", sm: "5.5rem" }, fontWeight: "bold",  fontFamily: "Montserrat" , color:"white", textShadow:"4px 4px 4px black"}}>
        Skills
      </Typography>
      </div>
      <NameBox/>




      <div style={{height:"20vh",width:"100vw", backgroundColor:"rgba(255, 230, 3, 0.94)",marginTop:"5vh", display:"flex",alignItems:"center",overflow:"auto",border:"6px solid black"}}>
      <Typography variant="h3" sx={{ fontSize: { xs: "5rem", sm: "5.5rem" }, fontWeight: "bold", fontFamily: "Montserrat" , color:"white", textShadow:"4px 4px 4px black"}}>
        Projects
      </Typography>
      </div>

      <Projects/>



      <div style={{height:"20vh",width:"100vw", backgroundColor:"rgba(16, 78, 1, 0.94)",marginTop:"5vh", display:"flex",alignItems:"center",overflow:"auto",border:"6px solid black",marginBottom:"10vh"}}>
      <Typography variant="h3" sx={{ fontSize: { xs: "5rem", sm: "5.5rem" }, fontWeight: "bold", fontFamily: "Montserrat" , color:"white", textShadow:"4px 4px 4px black"}}>
        Experiences
      </Typography>
      </div>

      <div style={{
            width: "100%",
            height: "100vh",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",  // horizontal center
            alignItems: "center"       // vertical center
          }}>
            <TimeLine />
          </div>






      <footer className='navbar' style={{
        position: "relative",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "6.76vh",
        display: "flex",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to right,rgb(0, 0, 0),rgb(8, 6, 6))",
        alignItems: "center",
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        gap: "70px",
        textShadow:"2px 2px 2px black"
        
      }}>
          <a href='https://github.com/danoruo1' className='navbartext' style={{ fontFamily: "Montserrat", color: "white", textDecoration: "none"}}> Github </a>
          <a href='https://www.linkedin.com/in/daniel-anoruo-b05097268' className='navbartext' style={{ fontFamily: "Montserrat", color: "white", textDecoration: "none"}}> Linkedin </a>
          <a href='mailto:danoruo1@students.towson.edu' className='navbartext' style={{ fontFamily: "Montserrat", color: "white", textDecoration: "none"}}> Email </a>
        
      </footer>

     
    </div>
  );
}

export default App;