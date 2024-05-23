import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./formulario.css";

const Formulario = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_lsnges4", "template_uxbam9d", form.current, {
        publicKey: "pfeXxWtN-GBaGmOv9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="form-text">
        <h1> Quer nos conhecer melhor? Mandaremos um e-mail!</h1>
        <div className="form-form">
        <form className="form-wrapper"ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit" value="Send">
            SEND EMAIL
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
