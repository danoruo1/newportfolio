import { Typography, Box } from '@mui/material';
import React from 'react';


const titles = ["Image Predictor", "Cryptify","Cybersecurity Database Manager","CourseSight","File Manager"]
const descriptions = ["","","",""]
const images = ["","","",""]
const Projects = () => {

   return( 
   
   <div style={containerStyle}>

    {titles.map((title,index) => (


        <div style={{backgroundColor:"transparent",backgroundSize:"cover",height:"30vh",width:"60vw",overflow:"visible",alignItems:"center",display:"flex",flex:"wrap"}}>
            <Box sx={{height:"20vh",width:"20vw",backgroundColor:"white",borderRadius:"20px",border:"5px solid black"}}>
                
            </Box>

            <div key={index} className='navbar' style={{overflow:"auto",backgroundImage:"linear-gradient(to right,rgb(219, 74, 86),rgb(241, 62, 116))",width:"97%"}}>
                <Typography className='navbartext' style={{fontWeight:"bold",fontSize:"1.2vw", textShadow:"4px 4px 4px black",backgroundColor:"transparent",color:"white"}}> {title} </Typography> 
            </div>
            {index !== titles.length-1 &&<Typography className='navbartext' style={{fontWeight:"bold",fontSize:"3.2vw", textShadow:"4px 4px 4px black",backgroundColor:"transparent",color:"white",left:"5vw",position:"relative"}}> →  </Typography>} 

        </div>



    ))}

   </div>);
    

}

const containerStyle = {
    width:"100vw",
    height:"25vh",
    overflowX:"auto",
    display:"flex",
    flexbox:"wrap",
    backgroundColor:"transparent",
    marginTop:"5vh",
    alignItems:"center",
    gap:"8vw",
    marginBottom:"5vh",
}




export default Projects