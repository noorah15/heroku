import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./style.css";

export default function Continer1() {
  return (
    <>
      <div>
        <img
          src={"https://www.w3schools.com/howto/img_avatar2.png"}
          alt="Avatar"
          className="img1"
        />

        <h2> Noorah Almohaimeed </h2>
        <h3> Full Stack Developer </h3>
        <hr />

        <p>
          {" "}
          <img
            src={
              "https://icons-for-free.com/iconfiles/png/512/location+arrow-1325051860067127618.png"
            }
            className="img2"
          />{" "}
          Buraidah, Alqassim, Saudi Arabia{" "}
        </p>
        <a href={"mailto:noorah.almohaimeed@outlook.com"}>
          <img
            src={
              "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/message-icon-design-template-ff734aad72da096f0e49f3d693042135_screen.jpg?ts=1581057128"
            }
            className="img2"
          />{" "}
          noorah.almohaimeed@outlook.com{" "}
        </a>
        <hr />

        <a to="https://github.com/noorah15">
          <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />{" "}
        </a>
        <hr />
        <p>
          I built this site with React components and a JSON Resume Schema. The
          full source code can be found in my Github repo.{" "}
        </p>
      </div>
    </>
  );
}
