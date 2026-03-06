import React from "react";

function About(){

return(

<section style={styles.section} id="about">

<h2 style={styles.heading}>About Avanflix</h2>

<p style={styles.description}>
Avanflix is a digital marketing agency helping businesses grow online.
We specialize in creating data-driven marketing strategies that increase
brand visibility, generate leads, and boost conversions.
</p>

<div style={styles.pointsContainer}>

<p style={styles.point}>• Search Engine Ranking Improvement</p>
<p style={styles.point}>• Targeted Social Media Campaigns</p>

<p style={styles.point}>• High-Converting Website Development</p>
<p style={styles.point}>• Data-Driven Marketing Strategies</p>

<p style={styles.point}>• Lead Generation & Customer Acquisition</p>
<p style={styles.point}>• Brand Visibility & Online Presence</p>

</div>

</section>

)

}

const styles = {

section:{
textAlign:"center",
backgroundColor:"black",
color:"white",
padding:"100px 10%"
},

heading:{
fontSize:"32px",
marginBottom:"20px"
},

description:{
maxWidth:"700px",
margin:"auto",
marginBottom:"40px",
lineHeight:"1.6"
},

pointsContainer:{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"15px",
maxWidth:"550px",
margin:"auto",
textAlign:"left"
},

point:{
fontSize:"16px"
}

}

export default About;