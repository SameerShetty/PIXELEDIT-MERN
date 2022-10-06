import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../index.css";
import Loader from "./loader";
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

function Services() {
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
      {" "}
      <div style={{ display: isload ? "block" : "none" }}>
        <Loader />
      </div>
      <h1 className="page-primary-heading">
        SERVICES
        <hr />
      </h1>
      <div className="page-container">
        <div className="left-box">
          <img src="../../imgs/services-img.jpg" alt="service-img" />
        </div>
        <div className="right-box">
          <div className="service-secondary-container">
            <div className="box">
              <span></span>
              <h2>Photoshop</h2>
              <div className="service-icon-div">
                <SiAdobephotoshop className="service-icon" />
                <p>
                  Create Beautiful Images, Graphics, Paintings, And 3D Artwork
                  On Your Desktop And iPad. If You Can Dream It, You Can Make It
                  With Photoshop. Photographers, graphic designers, web
                  designers all use Photoshop.
                </p>
              </div>
            </div>
            <div className="box">
              <span></span> <h2>Illustration</h2>
              <div className="service-icon-div">
                <SiAdobeillustrator className="service-icon" />
                <p>
                  Graphic designers use Illustrator to create vector graphics.
                  Vector images and graphics are made of points, lines, shapes,
                  and curves based on mathematical formulas rather than a set
                  amount of pixels and can be scaled up or down.
                </p>
              </div>
            </div>
            <div className="box">
              <span></span> <h2>Premiere Pro</h2>
              <div className="service-icon-div">
                <SiAdobepremierepro className="service-icon" />
                <p>
                  Premiere Pro is the industry-leading video editing software
                  for film, TV and the web. Creative tools and integration with
                  other apps and services helps you craft footage into polished
                  films and videos.
                </p>
              </div>
            </div>

            <div className="box">
              <span></span> <h2>After Effects</h2>
              <div className="service-icon-div">
                <SiAdobeaftereffects className="service-icon" />
                <p>
                  Adobe After Effects is a digital visual effects, motion
                  graphics, and compositing application developed by Adobe
                  Systems and used in the post-production process of film
                  making, video games and television production.
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/Contact"
            style={{ position: "fixed", bottom: "1rem", right: "1.5rem" }}
          >
            <button className="btn" style={{ backgroundColor: "#1e2022" }}>
              Contact Me
            </button>
          </Link>
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

          <li className="selected">Services</li>
          <li>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Services;
