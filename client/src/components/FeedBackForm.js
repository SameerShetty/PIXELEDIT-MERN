import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { GiPartyPopper } from "react-icons/gi";
import "../index.css";
import Loader from "./loader";

function FeedBackForm() {
  const [isnavspan, setnavspan] = useState(false);
  const [ishamburger, sethamburger] = useState(false);
  const [isdone, setdone] = useState(false);
  const [isload, setload] = useState(true);
  const [feed, setfeed] = useState({
    name: "",
    desc: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 4000);
  }, []);

  function handlechange(e) {
    const value = e.target.value;
    setfeed((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  }
  function successoff() {
    setdone(false);
  }
  window.addEventListener("scroll", successoff);
  function handleclick(event) {
    event.preventDefault();
    const userfeedb = {
      name: feed.name,
      desc: feed.desc,
    };
    axios
      .post("/userfeed", userfeedb)
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
            We have received your Feedback and would like to thank you for your
            support.
          </p>{" "}
        </div>
      </div>
      <h1 className="page-primary-heading-contact feed-header">
        FEEDBACK
        <hr style={{ borderColor: "#3f72af" }} />
      </h1>
      <div className="page-container">
        <div className="left-box">
          <img src="../../imgs/Feed-img.jpg" alt="Feedback-img" />
        </div>
        <div className="right-box" style={{ backgroundColor: "#1e2022" }}>
          <div className="contact-secondary-container">
            <form>
              <label for="name"> NAME :</label>
              <input
                id="name"
                type="name"
                name="name"
                value={feed.name}
                placeholder="Your name"
                required
                autoFocus
                onChange={handlechange}
              />

              <label for="msg">MESSAGE :</label>
              <textarea
                id="msg"
                name="desc"
                value={feed.desc}
                placeholder="Hey! Type in your Feedback here..."
                required
                onChange={handlechange}
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
                style={{ margin: "2rem 0 2.5rem", alignSelf: "flex-start" }}
                onClick={handleclick}
              >
                Send Feedback
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
            <NavLink to={"/Gallery "}>Gallery </NavLink>
          </li>

          <li>
            {" "}
            <NavLink to={"/Services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FeedBackForm;
