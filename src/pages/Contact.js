import React from "react";
import "../style/contact.css";
import ContactInfo from "../components/ContactInfo";
import Email from "../components/Email";

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contact-title'>Get In Touch</h1>
      <div className='contact-container'>
        <ContactInfo />
        <Email />
      </div>
    </div>
  );
};

export default Contact;
