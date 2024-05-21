import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Reveal from "../Reveal";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Reveal> 
  <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Jikkeshwar PalaniKumar</span> from <span className="purple">Tamil Nadu, India</span>.
      <br />
      I'm currently working as a software developer, crafting digital solutions that drive innovation.
      <br />
      With a background in Computer Science and Engineering, I'm dedicated to honing my skills and pushing the boundaries of what's possible.
      <br />
      <br />
      Apart from coding, I find joy in various activities:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing eFootball games Online
      </li>
      <li className="about-activity">
        <ImPointRight /> Cricket on field
      </li>
      <li className="about-activity">
        <ImPointRight /> Writing screenplays for short films
      </li>
    </ul>
    <p style={{ color: "rgb(155 126 172)" }}>
      "Striving to make each day an adventure and every moment a masterpiece."
    </p>
    <footer className="blockquote-footer">Jikkesh</footer>
  </blockquote>
</Card.Body>
</Reveal>
    </Card>
  );
}

export default AboutCard;
