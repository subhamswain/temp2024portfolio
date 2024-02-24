import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subham Swain </span>
            from <span className="purple"> Rourkela,Odisha.</span>
            <br /> I have 2.0 years experience as a software developer.
            <br />
            <br/>
            <h3>EXPERIENCE</h3>
            <li className="about-activity">
            <ImPointRight />FullStack Developer in Anand Rathi Wealth Pvt Ltd(Fintech) from January 2024 to present.
            </li>
            <li className="about-activity">
            <ImPointRight />Software Engineer in Target Integration (Dec 2021 to Jan 2022)
            </li>
            <li className="about-activity">
            <ImPointRight /> Application Developer in IWCN (Aug 2021 to Nov 2021)
            </li>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton and cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling to new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Subham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
