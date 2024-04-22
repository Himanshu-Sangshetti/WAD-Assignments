
import React from "react";
import { contactInfo } from "./data";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <ul>
        <li>Email: {contactInfo.email}</li>
        <li>Phone: {contactInfo.phone}</li>
        <li>Address: {contactInfo.address}</li>
      </ul>
    </section>
  );
}

export default Contact;
