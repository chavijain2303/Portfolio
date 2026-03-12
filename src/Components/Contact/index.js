import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Snackbar } from '@mui/material'

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:80px 0;
position:relative;
z-index:1;
`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
max-width:1200px;
gap:20px;
`

const Title = styled.div`
font-size:44px;
font-weight:700;
text-align:center;
color:${({ theme }) => theme.text_primary};

@media (max-width:768px){
font-size:34px;
}
`

const Desc = styled.div`
font-size:18px;
text-align:center;
max-width:650px;
line-height:1.6;
color:${({ theme }) => theme.text_secondary};

@media (max-width:768px){
font-size:16px;
}
`

const ContactForm = styled.form`
width:95%;
max-width:620px;

display:flex;
flex-direction:column;

background:linear-gradient(
145deg,
rgba(20,20,40,0.9),
rgba(10,10,25,0.9)
);

border:1px solid rgba(133,76,230,0.4);

padding:36px 32px;

border-radius:18px;

box-shadow:0px 10px 30px rgba(133,76,230,0.15);

margin-top:30px;

gap:16px;

transition:all 0.3s ease;
`

const ContactTitle = styled.div`
font-size:26px;
font-weight:600;
color:${({ theme }) => theme.text_primary};
margin-bottom:6px;
text-align:center;
`

const ContactInput = styled.input`
background:rgba(255,255,255,0.04);

border:1px solid rgba(255,255,255,0.15);

outline:none;

font-size:16px;

color:${({ theme }) => theme.text_primary};

border-radius:10px;

padding:12px 16px;

transition:all 0.25s ease;

::placeholder{
color:${({ theme }) => theme.text_secondary};
}

&:focus{
border:1px solid ${({ theme }) => theme.primary};
box-shadow:0px 0px 10px rgba(133,76,230,0.4);
}
`

const ContactInputMessage = styled.textarea`
background:rgba(255,255,255,0.04);

border:1px solid rgba(255,255,255,0.15);

outline:none;

font-size:16px;

color:${({ theme }) => theme.text_primary};

border-radius:10px;

padding:12px 16px;

resize:none;

transition:all 0.25s ease;

::placeholder{
color:${({ theme }) => theme.text_secondary};
}

&:focus{
border:1px solid ${({ theme }) => theme.primary};
box-shadow:0px 0px 10px rgba(133,76,230,0.4);
}
`

const ContactButton = styled.button`
width:100%;

background:linear-gradient(135deg,#854CE6,#6C3FD4);

border:none;

padding:13px 16px;

border-radius:10px;

color:white;

font-size:17px;

font-weight:600;

cursor:pointer;

transition:all 0.25s ease;

margin-top:6px;

&:hover{
transform:translateY(-2px);
box-shadow:0px 8px 18px rgba(133,76,230,0.5);
}
`

const Contact = () => {

const [open,setOpen]=React.useState(false)
const form = useRef()

const handleSubmit = (e)=>{
e.preventDefault()

emailjs.sendForm(
'service_tox7kqs',
'template_nv7k7mj',
form.current,
'SybVGsYS52j2TfLbi'
).then(()=>{
setOpen(true)
form.current.reset()
},(error)=>{
console.log(error.text)
})

}

return (
<Container id="contact">

<Wrapper>

<Title>Contact</Title>

<Desc>
Feel free to reach out if you'd like to collaborate,
discuss opportunities, or just connect.
</Desc>

<ContactForm ref={form} onSubmit={handleSubmit}>

<ContactTitle>Email Me 🚀</ContactTitle>

<ContactInput
placeholder="Your Email"
name="from_email"
required
/>

<ContactInput
placeholder="Your Name"
name="from_name"
required
/>

<ContactInput
placeholder="Subject"
name="subject"
required
/>

<ContactInputMessage
placeholder="Message"
rows="4"
name="message"
required
/>

<ContactButton type="submit">
Send Message
</ContactButton>

</ContactForm>

<Snackbar
open={open}
autoHideDuration={5000}
onClose={()=>setOpen(false)}
message="Email sent successfully!"
/>

</Wrapper>

</Container>
)

}

export default Contact