import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div style={{
      backgroundColor:"blue",
      height:"100vh",
      background:"cover",
      boxShadow: '0px 10px 20px rgba(255, 0, 0, 0.25)', // Custom box shadow
      overflow:"auto"
    }}>


      <div className='navbar'>
        <a href='/'> Home </a>
        <a href='/'> Biography </a>
        <a href='/'> Projects </a>
        <a href='/'> Resume/CV </a>

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
