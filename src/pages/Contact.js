import { useState } from "react";
import "../style/contact.css";
import ContactInfo from "../components/ContactInfo";
import Email from "../components/Email";
import Modal from "../components/Modal";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='contact'>
      <h1 className='contact-title'>Get In Touch</h1>
      <div className='contact-container'>
        <ContactInfo />
        <Email modalOpen={setOpenModal} />
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Contact;
