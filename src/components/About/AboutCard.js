import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Taha Maghlazi </span>
            from <span className="purple"> Paris, France.</span>
            <br/>
            <br/>
            I'm currently a Master's student in Data and Artificial Intelligence. Passionate about data and software development
            <br/>
            <br/>
            I'm deeply interested in exploring the realms of data and software development.
            <br/>
            <br/>
            Beyond my coding endeavors, I find immense joy and fulfillment in expressing my creativity as an artist through the intricate strokes and vibrant colors of painting.
          </p>
          <br />
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Taha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
