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
import { FiMail } from "react-icons/fi";

function Gallery() {
  const [isnavspan, setnavspan] = useState(false);
  const [ishamburger, sethamburger] = useState(false);
  const [isload, setload] = useState(true);
  const date = new Date();
  const CurYear = date.getFullYear();
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
      {" "}
      <div style={{ display: isload ? "block" : "none" }}>
        <Loader />
      </div>
      <div
        className="set-hero"
        style={{ backgroundImage: 'url("../../imgs/gallery-img.jpg")' }}
      >
        <h1>GALLERY</h1>
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
      </div>
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

          <li className="selected">Gallery</li>

          <li>
            <NavLink to={"/Services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="Gallery-container">
        <div className="Gallery-img-box">
          <div>
            <img src="../../imgs/roboexpo.jpg" alt="Gallery-img" />
          </div>
          <div>
            <img src="../../imgs/ctf.jpeg" alt="Gallery-img" />
          </div>

          <div>
            <img src="../../imgs/HappyNewYear.jpg" alt="Gallery-img" />
          </div>
          <div>
            <img src="../../imgs/Sark-Recruit.png" alt="Gallery-img" />
          </div>
          <div>
            <img src="../../imgs/SARK_XMASFP.png" alt="Gallery-img" />
          </div>
          <div>
            <img src="../../imgs/ideaS.jpeg" alt="Gallery-img" />
          </div>
          <div>
            <img src="../../imgs/sark_evet.jpeg" alt="Gallery-img" />
          </div>
        </div>

        <Link to="/Works">
          <button className="btn" style={{ margin: "4rem auto" }}>
            View Works
          </button>
        </Link>
      </div>
      <div className="footer-wrapper">
        <h2>Sameer Shetty</h2>
        <div className="socio-handles">
          <a href="https://www.instagram.com/invites/contact/?i=1obzed76tejms&utm_content=k5q9ctw">
            <FaInstagram className="icon" />
          </a>
          |
          <a href="https://twitter.com/SameerShetty20?t=Da6eyan9XPPgT5iK7cz8DQ&s=09">
            <FaTwitter className="icon" />
          </a>
          |
          <a href="https://www.linkedin.com/in/sameer-shetty-478481217">
            <FaLinkedinIn className="icon" />
          </a>
          |
          <a href="https://github.com/SameerShetty">
            <FaGithub className="icon" />
          </a>
          |
          <a href="mailto:Kalyanshettisameer@gmail.com">
            <FiMail className="icon" />
          </a>
        </div>
        <div className="copyright-section">
          <p>Copyright &#169; {CurYear}</p>
          <p>
            Made with{" "}
            <FaHeart
              className="icon"
              style={{
                color: "red",
                paddingTop: ".4rem",
              }}
            />{" "}
            by Sameer Shetty
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
