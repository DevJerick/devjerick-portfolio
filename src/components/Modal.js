import React from "react";
import "../style/modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className='backgroundModal'>
      <div className='modal'>
        <div className='title'>
          <p>Thank You</p>
          <div className='closeBtn'>
            <button
              onClick={() => {
                closeModal(false);
              }}>
              <i className='bx bx-x'></i>
            </button>
          </div>
        </div>
        <div className='body'>
          <p>Your message has been successfully submitted. Thanks!</p>
        </div>

        <div className='okBtn'>
          <button
            onClick={() => {
              closeModal(false);
            }}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
