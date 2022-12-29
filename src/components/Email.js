import React, { useRef } from "react";
import "../style/email.css";
import emailjs from "emailjs-com";

const Email = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_gb9hdyp", form.current, "is1Nuaz7P65FstGak")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='email'>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Let's Talk</h2>
        <div className='form-control'>
          <label>Name</label>
          <input type='text' placeholder='John Doe' name='name' />
        </div>
        <div className='form-control'>
          <label>Email</label>
          <input type='text' placeholder='example@gmail.com' name='email' />
        </div>
        <div className='form-control'>
          <label>Subject</label>
          <input type='text' placeholder='Review Portfolio' name='subject' />
        </div>
        <div className='form-control'>
          <label>Message</label>
          <textarea name='message' placeholder='Your Message...'></textarea>
        </div>
        <input className='btn-send' type='submit' value='Send' />
      </form>
    </div>
  );
};

export default Email;
