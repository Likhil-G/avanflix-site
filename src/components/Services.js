import React from "react";

function Services(){

return(

<section id="services">
<h2 style={{textAlign:"center" ,fontSize:"32px",
}}>Our Services</h2>

<div style={styles.grid}>

<div style={styles.card}>
<h3>SEO Optimization</h3>
<p>Rank higher on Google search results.</p>
</div>

<div style={styles.card}>
<h3>Social Media Marketing</h3>
<p>Grow audience across Instagram, Facebook and LinkedIn.</p>
</div>

<div style={styles.card}>
<h3>Website Development</h3>
<p>Build fast and modern websites.</p>
</div>

<div style={styles.card}>
<h3>Brand Strategy</h3>
<p>Create powerful brand identity.</p>
</div>

</div>

</section>

)

}

const styles={

grid:{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"20px",
marginTop:"40px"
},

card:{
padding:"30px",
background:"white",
borderRadius:"10px",
boxShadow:"0 5px 10px rgba(0,0,0,0.1)"
}

}

export default Services;