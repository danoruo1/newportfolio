import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const ProfilePicComponent = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade-in effect after 250ms
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 250);

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Box
      sx={{
        width: { xs: '80vw', sm: '50vw', md: '15vw' }, // Responsive width
        height: { xs: '30vh', sm: '25vh', md: '25vh' }, // Responsive height
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden', // Changed from 'clip' to 'hidden' for better compatibility
        boxShadow: '5px 5px 15px rgba(255, 251, 251, 0.8)', // Added opacity to shadow
        transition: 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out', // Added transform transition
        opacity: opacity,
        '&:hover': {
          transform: 'scale(1.05)', // Slight zoom on hover
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '-30px', sm: '-40px', md: '-55px' }, // Responsive positioning
          transition: 'opacity 0.5s ease-in-out',
          opacity: opacity,
        }}
      >
        <img
          src="./profilePic.jpg"
          alt="Profile"
          style={{
            width: '100%', // Make image responsive
            height: 'auto', // Maintain aspect ratio
            maxWidth: '300px', // Limit maximum size
            borderRadius: '10px', // Optional: Add border radius to the image
          }}
        />
      </Box>
    </Box>
  );
};

export default ProfilePicComponent;