import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
message:""
});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
}

const handleSubmit = (e)=>{
e.preventDefault();

emailjs.send(
"service_1ox2gus",
"template_3rhco3m",
{
from_name:form.name,
from_email:form.email,
message:form.message
},
"CDfgRR1zjR3y_a0vh"
)
.then(()=>{
alert("Message Sent Successfully ✅");

setForm({
name:"",
email:"",
message:""
});

})
.catch(()=>{
alert("Failed to send message ❌");
});

}

return(

<section style={styles.section} id="contact">

<h2 style={styles.heading}>Contact Us</h2>

<p style={styles.subtext}>
Have a project in mind? Let's grow your business with Avanflix.
</p>

<form style={styles.form} onSubmit={handleSubmit}>

<input
style={styles.input}
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
/>

<input
style={styles.input}
type="email"
name="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
required
/>

<textarea
style={styles.textarea}
name="message"
placeholder="Your Message"
value={form.message}
onChange={handleChange}
/>

<button style={styles.button}>
Send Message
</button>

</form>

</section>

)

}

const styles={

section:{
padding:"100px 10%",
background:"#f9fafb",
display:"flex",
flexDirection:"column",
alignItems:"center"
},

heading:{
fontSize:"30px",
marginBottom:"10px",
color:"#111827"
},

subtext:{
color:"#6b7280",
marginBottom:"30px",
textAlign:"center"
},

form:{
width:"100%",
maxWidth:"600px",
display:"flex",
flexDirection:"column",
gap:"20px"
},

input:{
padding:"14px",
fontSize:"15px",
border:"1px solid #d1d5db",
borderRadius:"6px",
outline:"none"
},

textarea:{
padding:"14px",
fontSize:"15px",
border:"1px solid #d1d5db",
borderRadius:"6px",
minHeight:"120px",
resize:"none",
outline:"none"
},

button:{
padding:"14px",
fontSize:"16px",
background:"#870a01",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}

}

export default Contact;