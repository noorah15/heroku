import React, { useState } from "react";
import "./style.css";

export default function Continer2() {
  const [skills] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "jQuery",
    "Github",
    "Bootstrap",
    "SQL",
    "Git",
    "JAVA",
    "C++",
    "C",
    "C#",
    "Python",
    "SQLite",
  ]);
  return (
    <div>
      <h3> ABOUT</h3>
      <hr />
      <p>
        {" "}
        Graduate of information technology with experience working across the
        full-stack of software development. I've built projects on small teams
        and I'm looking for a role where I can grow and continue to learn from
        other experienced team members.
      </p>
      <h3> WORK EXPERIENCE</h3>
      <hr />
      <h4>Technical Support, New Horizons Institute</h4>
      <p>07/2016 - 09/2016</p>
      <p>
        A collaborative training when I was studying at Qassim University and
        its duration was 8 weeks. Maintenance of computers, download the
        required software and format the computers.
      </p>

      <h3> SKILLS</h3>
      <hr />
      <p>
        {" "}
        {skills.map((item) => {
          return <span> {item}</span>;
        })}
      </p>

      <h3> EDUCATION </h3>
      <hr />
      <h4> Bachelor of information technology </h4>
      <h4>Qassim University </h4>
      <p>09/2013 - 05/2018</p>
    </div>
  );
}
