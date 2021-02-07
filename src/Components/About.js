import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function About() {
  return (
    <Jumbotron className='bg-transparent'>
      <h1>About me</h1>
      <hr />
      <br />
      <p>
        I'm a Professional Web Developer with over 8 years of experience in computer
        programming, web development, data processing and data management. Good
        knowledge of LAMP stack, working with command lines, writing modules,
        version control systems (GIT), DevOps practices (CI/CD, Jenkins, Docker
        etc.), responsive design, frontend as well as backend development,
        testing and debugging, server-side scripting, writing application code
        and object-oriented programming (OOP).
      </p>
    </Jumbotron>
  );
}
