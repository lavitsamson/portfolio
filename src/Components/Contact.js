import React from "react";
import { Jumbotron } from "react-bootstrap";
import { FiMail } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'

export default function Contact() {
  return (
    <Jumbotron className="bg-transparent">
      <h1>Contact Information</h1>
      <hr />
      <br />
      <p>
        <FiMail /> - lavitsamson@hotmail.com
        <br />
        <FiPhone /> - (+91) 94250 49327
      </p>
    </Jumbotron>
  );
}
