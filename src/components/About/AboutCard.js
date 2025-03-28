import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sneha Naraniwal </span>
            from <span className="purple"> Chiitorgarh,Rajasthan, India.</span>
            <br />
            I am B.Tech 3 year Student at UPES. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Puzzels
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sneha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
