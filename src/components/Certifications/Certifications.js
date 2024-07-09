import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsCards from "./CertificationsCards"
import Particle from "../Particle";
import cognizant from "../../Assets/Projects/cognizant.png";
import pwc from "../../Assets/Projects/pwc.png";
import chatify from "../../Assets/Projects/chatify.png";
import google from "../../Assets/Projects/google.png";

function Certifications() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Certifications </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few Certifications I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px"  }}>
                    
                <Col md={5} className="project-card">
                        <CertificationsCards
                            imgPath={google}
                            isBlog={false}
                            title="Foundations of Data Science"
                            description=" Delivered by Google."
                            demoLink="https://www.coursera.org/account/accomplishments/records/PKEXX3CQHNTX"
                        />
                    </Col>

                    <Col md={5} className="project-card">
                        <CertificationsCards
                            imgPath={chatify}
                            isBlog={false}
                            title="Data Analytics and Visualization"
                            description =" Delivered by Accenture"
                            demoLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_kdAb6aTMyJvSJq7WF_1711384163682_completion_certificate.pdf"
                        />
                    </Col>

                    

                    <Col md={5} className="project-card">
                        <CertificationsCards
                            imgPath={pwc}
                            isBlog={false}
                            title="Power BI Job Simulation"
                            description=" Delivered by Pwc."
                            demoLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_kdAb6aTMyJvSJq7WF_1711500114990_completion_certificate.pdf"
                        />
                    </Col>

                    <Col md={5} className="project-card">
                        <CertificationsCards
                            imgPath={cognizant}
                            isBlog={false}
                            title="Agile methodology Virtual Experience Program "
                            description="Delivered by Cognizant"
                            demoLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant%20USA/ZZswQd6xGydd758vz_Cognizant%20USA_mNJzheqvK56ariXrJ_1677374625761_completion_certificate.pdf"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Certifications;
