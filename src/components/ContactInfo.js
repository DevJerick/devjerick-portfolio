import "../style/contactInfo.css";

const ContactInfo = () => {
  return (
    <div className='contactInfo'>
      <div className='address'>
        <i className='bx bxs-home'></i>
        <div className='address-text'>
          <h1 className='address-title'>Address</h1>
          <h4 className='address-sub-title'>San Simon, Pampanga</h4>
        </div>
      </div>

      <div className='my-email'>
        <i className='bx bxs-envelope'></i>
        <div className='email-text'>
          <h1 className='email-title'>Email</h1>
          <h4 className='email-sub-title'>It.jericksejas@gmail.com</h4>
        </div>
      </div>

      <div className='contact-number'>
        <i className='bx bxs-phone-call'></i>
        <div className='contact-number-text'>
          <h1 className='contact-number-title'>Contact</h1>
          <h4 className='contact-sub-title'>+639452508342</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
