import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsCards from "./CertificationsCards"
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import marrakech from "../../Assets/Projects/marrakech.png";
import malaria from "../../Assets/Projects/malaria.png";

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
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={5} className="project-card">
                        <CertificationsCards
                            imgPath={chatify}
                            isBlog={false}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            demoLink="https://chatify-49.web.app/"
                        />
                    </Col>

                    <Col md={5} className="project-card">
                        <CertificationsCards
                            imgPath={malaria}
                            isBlog={false}
                            title="Image Classification for Malaria Detection"
                            description="This project aims to classify images of parasitized and non-parasitized blood cells using convolutional neural networks (CNNs). Three models are employed: one built from scratch, one based on VGG16, and another based on ResNet50."
                            demoLink="https://blogs.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={5} className="project-card">
                        <CertificationsCards
                            imgPath={editor}
                            isBlog={false}
                            title="Editor.io"
                            description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                            demoLink="https://editor.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={5} className="project-card">
                        <CertificationsCards
                            imgPath={leaf}
                            isBlog={false}
                            title="Plant AI"
                            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                            demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Certifications;
