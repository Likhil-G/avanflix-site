import React from "react";
import logo from '../assets/AVANFLIX_BLACK.png'

function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={styles.nav}>
      <img src={logo}  alt="Avanflix Logo" style={styles.logo}/>

      <div>
        <button style={styles.link} onClick={() => scrollToSection("home")}>Home</button>
        <button style={styles.link} onClick={() => scrollToSection("services")}>Services</button>
        <button style={styles.link} onClick={() => scrollToSection("about")}>About</button>
        <button style={styles.link} onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </nav>
  );
}

const styles = {
  nav:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"0px 5%",
    background:"#171412",
    color:"white",
    position:"fixed",
    width:"100%",
    top:"0",
    height: '70px',
    zIndex:"1000"
  },

  logo:{
   height : '100px'
  },


  link:{
    margin:"0 15px",
    background:"none",
    border:"none",
    color:"white",
    fontSize:"16px",
    cursor:"pointer"
  }
}

export default Navbar;