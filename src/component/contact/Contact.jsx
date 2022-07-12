import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assest/contact.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" onClick={() => setMessage(true)}>
            Send
          </button>
        </form>
        {message && <span>Thanks, I'll reply ASAP :)</span>}
      </div>
    </div>
  );
}
