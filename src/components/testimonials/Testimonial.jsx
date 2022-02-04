import React from 'react';
import emailjs from "emailjs-com";
import "./testimonials.scss"

export default function ContactUs() {
function sendEmail(e) {
e.preventDefault();
emailjs.sendForm('gmail', 'template_trn6lah', e.target,'user_IWsgduhvBGJEEDUBw4dio')
.then((result) => {
console.log(result.text);
}, (error) => {
console.log(error.text);
});
e.target.reset()
}
return( 
<div className="testimonials">
<div className='left'>
<img
src="assets/shake2.png" alt=""/>
</div>
          <div className='right'>
              <h2>Actively looking for internships.</h2>
                 <h1>⬇️Contact Me Below</h1>
                     <form onSubmit={sendEmail}>
                <div className="row-5 mx-auto">
                     <div className="col-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="Name" name="name"/>
                     </div>
                <div className="col-8 form-group mx-auto">
                     <input type="text" className="form-control" placeholder="Email Address" name="email"/>
                </div>
                     <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                     </div>
                <div className="col-8 form-group pt-2 mx-auto">
                     <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                </div>
                    <div className="col-8 form-group pt-2 mx-auto">
               <button type="submit" className="btn btn-primary">Send</button>
               
                    </div>
                   
               </div>
             </form>
             <h3>👨‍💻Created and developed by Arun Singh Tomar.</h3>
        </div>
   </div>

)
}