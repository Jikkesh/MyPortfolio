import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/naruto.gif";
import Tilt from "react-parallax-tilt";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Projects from "../Projects/Projects";

import Reveal from "../Reveal";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Reveal>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Hmm,<span className="purple"> ME ? </span>
              </h1>
              <p className="home-about-body">
                Driven Developer and passionate about building <span className="purple"> innovative solutions. </span>
                <br></br>

                Committed to pushing boundaries and making a real impact. Thrives on <span className="purple"> collaboration and
                  embraces new challenges</span>  with enthusiasm.
                <br></br>
                <br></br>
                <span className="purple"> Let's Create Something Remarkable Together.</span>
              </p>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="myAvtar-img-fluid" alt="avatar" />
              </Tilt>
            </Col>

          </Row>
        </Reveal>


        <Techstack />
        <Toolstack />
        <Projects />



        <Reveal>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND <span className="purple">Jikkesh </span>ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Jikkesh"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Jikkesh_kumar"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/jikkesh-kumar-6917a4270/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/jikk.esh/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Reveal>
    
  );
}
export default Home2;
