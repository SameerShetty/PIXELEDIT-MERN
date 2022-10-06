import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../index.css";
import Loader from "./loader";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

function About() {
  const [isnavspan, setnavspan] = useState(false);
  const [ishamburger, sethamburger] = useState(false);
  const [isload, setload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 4000);
  }, []);

  const navToggle = () => {
    setnavspan(!isnavspan);
    sethamburger(!ishamburger);
  };
  return (
    <div>
      <div style={{ display: isload ? "block" : "none" }}>
        <Loader />
      </div>
      <div className="page-container">
        <div
          className="left-box"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="../../imgs/sam-img.jpg"
            alt="sam-img"
            style={{ borderRadius: "50%", height: "auto", width: "70%" }}
          />
        </div>
        <div className="right-box" style={{ backgroundColor: "#1e2022" }}>
          <div className="about-secondary-container">
            <h1 className="page-primary-heading-about">
              I'm Sameer <br />
              Shetty
              <hr style={{ borderColor: "#3f72af" }} />
            </h1>

            <div className="about-wrapper">
              <p>
                {" "}
                I am a 2nd Year undergraduate student from Siddaganga Institute
                of Technology, Tumkur. From very early on in my life, I started
                to fall in love with technology.This love has helped me develop
                a very good technological mindset , and given me the curiosity
                to learn more.
              </p>

              <h2>ASK ME ABOUT</h2>
              <div className="skill-container">
                <div className="small-box">
                  <h3>Web Dev</h3>
                  <ul>
                    <li>HTML5 & CSS3</li>

                    <li>JS</li>
                    <li>MERN STACK</li>
                    <li>FLUTTER</li>
                  </ul>
                </div>
                <div className="small-box">
                  <h3>Coding</h3>
                  <ul>
                    <li>C/C++</li>

                    <li>JS</li>
                    <li>C embedded</li>
                  </ul>
                </div>
                <div className="small-box">
                  <h3>Editing</h3>
                  <ul>
                    <li>Photoshop</li>
                    <li>Illustration</li>
                    <li>Premiere Pro</li>
                    <li>After Effects</li>
                  </ul>
                </div>
                <div className="small-box">
                  <h3>Others</h3>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>Arduino Programming</li>
                    <li>Chess</li>
                  </ul>
                </div>
              </div>
              <p>
                {" "}
                Since beginning my journey as a freelance designer over 1.5
                years ago, I've done remote work for clubs, consulted for club
                events, and collaborated with talented people to create digital
                products for both clubs and events' use.{" "}
              </p>
              <h2>CONNECT WITH ME</h2>
              <div className="about-socio-handle">
                <a href="https://www.instagram.com/invites/contact/?i=1obzed76tejms&utm_content=k5q9ctw">
                  <FaInstagram className="icon" style={{ color: "#f0f5f9" }} />
                </a>

                <a href="https://twitter.com/SameerShetty20?t=Da6eyan9XPPgT5iK7cz8DQ&s=09">
                  <FaTwitter className="icon" style={{ color: "#f0f5f9" }} />
                </a>

                <a href="https://www.linkedin.com/in/sameer-shetty-478481217">
                  <FaLinkedinIn className="icon" style={{ color: "#f0f5f9" }} />
                </a>

                <a href="https://github.com/SameerShetty">
                  <FaGithub className="icon" style={{ color: "#f0f5f9" }} />
                </a>
              </div>
              <p style={{ padding: "3rem 0.5rem 2rem" }}>
                {" "}
                I firmly believe that no amount of knowledge is enough
                knowledge. I'm quietly confident, naturally curious, and
                perpetually working on improving my skills.
              </p>
              <div>
                <p
                  style={{ textAlign: "center", padding: "3rem 0.5rem .5rem" }}
                >
                  Made with{" "}
                  <FaHeart
                    className="icon"
                    style={{
                      color: "red",
                      verticalAlign: "text-bottom",
                      padding: ".1rem",
                    }}
                  />{" "}
                  by Sameer Shetty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-toggler" onClick={navToggle}>
        <div>
          <span
            className="bar-1"
            style={{
              transform: ishamburger
                ? "translateY(-4.5px) rotate(45deg)"
                : "none",
            }}
          ></span>
          <span
            className="bar-2"
            style={{ opacity: ishamburger ? "0" : "1" }}
          ></span>
          <span
            className="bar-3"
            style={{
              transform: ishamburger
                ? "translateY(-1px) rotate(-45deg)"
                : "none",
            }}
          ></span>
        </div>
      </div>
      <Link
        to="/Contact"
        style={{ position: "fixed", bottom: "1rem", right: "1.5rem" }}
      >
        <button
          className="btn"
          style={{ backgroundColor: "#f0f5f9", color: "#1e2022" }}
        >
          Contact Me
        </button>
      </Link>

      <Link to="/FeedBackform">
        <button className="feedback-btn" style={{ display: "inline" }}>
          <VscFeedback className="icon" />
        </button>
      </Link>
      <nav
        className="navpan"
        id="navpan"
        style={{ right: isnavspan ? "0" : "-240px" }}
      >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/Works"}>Works</NavLink>
          </li>

          <li>
            {" "}
            <NavLink to={"/Gallery"}>Gallery </NavLink>
          </li>

          <li>
            {" "}
            <NavLink to={"/Services"}>Services</NavLink>
          </li>
          <li className="selected">About</li>
          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default About;
