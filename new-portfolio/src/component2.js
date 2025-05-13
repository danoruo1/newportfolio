import React from 'react';
import {useState} from 'react';

const NameBox = () => {
  const names = [
    "UIDesign",
    "Linux",
    "Data Communications",
    "Software Development",
    "Machine Learning",
    "React",
    "Nextjs",
    "MongoDB",
    "Express.js",
    "Flexible",
    "Communication",
    "Node.js",
    "Java",
    "Python",
    "C"
  ];

  const [indexedHover,setIndexHover] = useState(null);

  return (
    <div style={styles.container} >
      {names.map((name, index) => (
        <div key={index} className="navbar" style={{width: indexedHover === index ? "17vw": "15vw",height:"10vh",color:"black",fontWeight:"bold",     transition:'width 0.3s'
        }} onMouseEnter={() => setIndexHover(index)} onMouseLeave={() => setIndexHover(false)}>
          {name}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
    padding: '20px',
  },
  
};

export default NameBox;
