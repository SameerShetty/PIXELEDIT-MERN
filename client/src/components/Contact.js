import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { GiPartyPopper } from "react-icons/gi";
import Loader from "./loader";

import "../index.css";

function Contact() {
  const [isnavspan, setnavspan] = useState(false);
  const [ishamburger, sethamburger] = useState(false);
  const [isdone, setdone] = useState(false);
  const [isload, setload] = useState(true);
  const [meetmsg, setmeetmsg] = useState({
    fname: "",
    fmail: "",
    msg: "",
  });
  function handlechange(e) {
    const value = e.target.value;
    setmeetmsg((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  }
  function successoff() {
    setdone(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 4000);
  }, []);
  window.addEventListener("scroll", successoff);
  function handleclick(event) {
    event.preventDefault();
    const contact_msg = {
      fname: meetmsg.fname,
      fmail: meetmsg.fmail,
      msg: meetmsg.msg,
    };
    axios
      .post("/msg", contact_msg)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setdone(true);
  }

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
      <div className="success-div" style={{ top: isdone ? "0" : "-62px" }}>
        <GiPartyPopper className="popper" />

        <div>
          {" "}
          <h2> Thanks for being awesome!</h2>
          <p>
            We have received your email and would like to thank you for writing
            to us.
          </p>{" "}
        </div>
      </div>
      <h1 className="page-primary-heading-contact">
        CONTACT
        <hr style={{ borderColor: "#3f72af" }} />
      </h1>
      <div className="page-container">
        <div className="left-box">
          <img src="../../imgs/contact-img.jpg" alt="contact-img" />
        </div>
        <div className="right-box" style={{ backgroundColor: "#1e2022" }}>
          <div className="contact-secondary-container">
            <form method="POST">
              <label for="name"> NAME :</label>
              <input
                id="name"
                type="name"
                name="fname"
                value={meetmsg.fname}
                onChange={handlechange}
                placeholder="Your name"
                required
                autoFocus
              />

              <label for="mailid">EMAIL :</label>

              <input
                id="mailid"
                type="mail"
                name="fmail"
                onChange={handlechange}
                placeholder="Email address"
                required
                value={meetmsg.fmail}
              />

              <label for="msg">MESSAGE :</label>
              <textarea
                id="msg"
                name="msg"
                placeholder="Tell me about your project"
                required
                onChange={handlechange}
                value={meetmsg.msg}
                style={{
                  resize: "vertical",
                  maxHeight: "350px",
                  minHeight: "200px",
                }}
              />

              <button
                value="submit"
                className="btn"
                type="submit"
                onClick={handleclick}
                style={{ margin: "2rem 0 2.5rem", alignSelf: "flex-start" }}
              >
                Send Message
              </button>
            </form>
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
        to="/FeedBackForm"
        style={{ position: "fixed", bottom: "1rem", right: "1.5rem" }}
      >
        <button className="btn">Give Feedback</button>
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
          <li>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li className="selected">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Contact;
