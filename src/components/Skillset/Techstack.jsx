import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiGit } from "react-icons/di";
import {
  SiJenkins,
  SiDocker,
  SiAnsible,
  SiCypress,
  SiLinux,
  SiSpeedtest,
  SiServerless,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <p className="teach-paragh">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> <p className="teach-paragh">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins /> <p className="teach-paragh">Jenkins</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> <p className="teach-paragh">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible /> <p className="teach-paragh">Ansible</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /> <p className="teach-paragh"> Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiServerless /> <p className="teach-paragh">Server</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpeedtest /> <p className="teach-paragh">Stress Testing</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress /> <p className="teach-paragh">Cypress</p>
      </Col>

     
    </Row>
  );
};

export default Techstack;
