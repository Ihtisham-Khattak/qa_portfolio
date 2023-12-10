import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJira,
  SiTrello,
  SiSlack,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> <p className="teach-paragh">Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> <p className="teach-paragh">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify /> <p className="teach-paragh">Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /> <p className="teach-paragh">Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira /> <p className="teach-paragh">Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello /> <p className="teach-paragh">Trello</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /> <p className="teach-paragh">Slack</p>
      </Col>
    </Row>
  );
};

export default Toolstack;
