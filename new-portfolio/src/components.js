import { useEffect, useState } from 'react';
import {Box } from '@mui/material';

const ProfilePicComponent = () => {
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setTimeout(() =>{
            setOpacity(1);
        },250);
  },[opacity])


  return(
    <Box
      sx={{
        width:"15vw",
        height:"25vh",
        backgroundColor:"white",
        borderRadius:"20px",
        alignItems:"center",
        position:"sticky",
        overflow:"clip",
        boxShadow: "5px 5px 15px rgb(255, 251, 251)", 
        transition: "opacity 0.5s ease-in-out", // Smooth transition
        opacity:opacity
      }}
      >
        <div style={{
          top:"-55px",
          position:"absolute",
          transition: "opacity 0.5s ease-in-out", // Smooth transition
          opacity:opacity
          }}>

          <img src="./profilePic.jpg" alt="Profile" width={300} />

        </div>
      </Box>

      

  );
};

export default ProfilePicComponent;


