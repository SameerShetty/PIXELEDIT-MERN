import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.link} alt=""></img>
      <h2>{props.title}</h2>
      <h1>{props.header}</h1>

      <p>{props.desc}</p>
    </div>
  );
}

function ClientCard(props) {
  return (
    <div className="clients-card">
      <img src={props.imgurl} alt="client-img" />
    </div>
  );
}

export default Card;
export { ClientCard };
