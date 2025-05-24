import { Typography, Box } from '@mui/material';
import React from 'react';
import stockImg1 from './photos/coursesight.png'
import stockImg2 from './photos/imgpredic.png'
import stockImg3 from './photos/cryptify.png'
import stockImg4 from './photos/database.png'

const titles = ["Image Predictor", "Cryptify","Cybersecurity Database Manager","CourseSight"]
const descriptions = ["Built a Web Application that utilizes a neural network, built to predict different classes in an image.","Developed a platformed used for encrypting and decrypting messages utilizing different algorithms","Designed a full-stack web application using React and MySQL for managing club member profiles, meetings, and events.","Collaborated on developing CourseSight, a platform designed for improved course feedback similar to rate my professor."]
const images = [`url(${stockImg2})`,`url(${stockImg3})`,`url(${stockImg4})`,`url(${stockImg1})`]
const Projects = () => {

   return( 
   
   <div style={containerStyle}>

    {titles.map((title,index) => (


        <div style={{backgroundColor:"transparent",backgroundSize:"cover",height:"30vh",width:"60vw",overflow:"visible",alignItems:"center",display:"flex",flex:"wrap",left:"5vw"}}>
            <Box sx={{height:"25vh",width:"40vw",backgroundImage:images[index],borderRadius:"20px",border:"5px solid black",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundColor:"transparent"}}>
                
            </Box>

            <div style={{width:"50vw",height:"25vh"}}>
                <div key={index} className='navbar' style={{overflow:"hidden",backgroundImage:"linear-gradient(to right,rgb(219, 74, 86),rgb(241, 62, 116))",width:"50%"}}>
                    <Typography className='navbartextnh' style={{fontWeight:"bold",fontSize:"1.2vw", textShadow:"4px 4px 4px black",backgroundColor:"transparent",color:"white"}}> {title} </Typography> 
                </div>
                <div style={{backgroundColor:"transparent",width:"18vw",height:"20vh",overflow:"auto"}}> 
                <Typography className='navbartextnh' style={{fontWeight:"bold",fontSize:"1.2vw", textShadow:"4px 4px 4px black",backgroundColor:"transparent",color:"white"}}> {descriptions[index]} </Typography> 

                </div>

            </div>
          
            
            {index !== titles.length-1 &&<Typography className='navbartextnh' style={{fontWeight:"bold",fontSize:"3.2vw", textShadow:"4px 4px 4px black",backgroundColor:"transparent",color:"white",left:"-10vw",position:"relative"}}> →  </Typography>} 

        </div>



    ))}




   </div>);
    

}

const containerStyle = {
    width:"100vw",
    height:"45vh",
    overflowX:"auto",
    display:"flex",
    flexbox:"wrap",
    backgroundColor:"transparent",
    marginTop:"5vh",
    alignItems:"center",
    gap:"2vw",
    marginBottom:"5vh",
    scrollBehavior:"smooth",

}




export default Projects