import './App.css';
import sec from './photos/secquoia_logo.jpg';
import nsf from './photos/logo.png'
import {Typography, Box } from '@mui/material';
import purdueImg from './photos/CISTAR.jpg';
import start from './photos/start.png'
import head from './photos/headstarter.jpg'
const experiences = [
  {
    title: "CISTAR Research Intern",
    description:"testest",
    time:"May, 2024 - Jul 2024",
    img:`url(${purdueImg})`,
    bg:"contain"
  },

  {
    title: "SWE Apprentice HeadStarterAI",
    description:"testest",
    time:"Jul, 2024 - Aug 2024",
    img:`url(${head})`,
    bg:"cover"


  },
  {
    title: "Undergraduate Student Researcher",
    description:"testest",
    time:"Aug, 2024 - May 2025",
    img:`url(${nsf})`,
    bg:"cover"

  },
  {
    title: "Hackathon Contributor: StarTUP 2nd Place Runner Up",
    description:"testes",
    time:"Nov, 2024 - Dec, 2024",
    img:`url(${start})`,
    bg:"cover"

  },

  {
    title: "Returning Purdue Research Intern Under Secquoia",
    description:"testses",
    time:"May, 2025 - Present",
    img:`url(${sec})`,
    bg:"cover"

  },



];

const TimeLine = () => {


  return(<div style={style}>

    {experiences.map((exp,index)=> (
      
      <div > 
        <div style={{backgroundSize:"cover", justifyContent:"center",display:"flex",alignItems:"center",overflow:"hidden"}}>
          <Typography className='navbartext' style={{fontWeight:"bold",fontSize:"1.2vw", textShadow:"4px 4px 4px black",backgroundColor:"transparent",color:"white",overflow:"hidden",width:"10vw"}}> {exp["title"]} </Typography> 

          <div key={index} style={{...snippt,backgroundImage:exp["img"],backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: exp["bg"],}}> 
          </div>
          <Typography className='navbartext' style={{fontWeight:"bold",fontSize:"1.2vw", textShadow:"4px 4px 4px black",backgroundColor:"transparent",color:"white"}}> {exp["time"]} </Typography> 

         
      
      
      </div>
      {index > 100000 && (
        <Typography
          className="navbartext"
          gutterBottom={false}
          style={{
            fontWeight: "bold",
            fontSize: "1.2vw",
            textShadow: "4px 4px 4px black",
            backgroundColor: "transparent",
            color: "white",
            margin: 0,
            padding: 0,
            display: "inline" // FOR LATER
          }}
        >
          {exp["description"]}
        </Typography>
      )}

      {index < experiences.length-1 &&<div style={{width:".35vw",height:"35vh",backgroundColor:"black", marginLeft:"15vw"}}>
      </div>}



      </div>
      

      
  ))}


    </div>)
  

  


}

const style = {
  backgroundSize:"cover",
  marginTop:"5vh",
  marginBottom:"5vh",
  width:"65vw",
  height:"100vh",
  backgroundColor:"transparent",
  display:"flex",
  flexWrap:"wrap",
  position:"relative",
  justifyContent:"center",
  overflow:"auto",
  gap:"15px",
  scrollBehavior:"smooth"
}

const snippt = {
  width:"10vw",
  height:"18vh",
  backgroundColor:"white",
  alignSelf:"center",
  justifyContent:"center",
  display:"flex",
  borderRadius:"180px",
  border:"5px solid black",
  alignItems:"center",
  scrollBehavior:"smooth"

}
export default TimeLine