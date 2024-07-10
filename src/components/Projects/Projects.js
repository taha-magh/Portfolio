import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import pbx1 from "../../Assets/Projects/pbx1.png";
import pbx2 from "../../Assets/Projects/pbx2.png";
import pbx3 from "../../Assets/Projects/pbx3.png";
import pbx4 from "../../Assets/Projects/pbx4.png";
import pbx5 from "../../Assets/Projects/pbx5.png";
import ecom from "../../Assets/Projects/ecom.png";
import suicide from "../../Assets/Projects/suicide.png";
import marrakech from "../../Assets/Projects/marrakech.png";
import fst from "../../Assets/Projects/fst.png";
import malaria from "../../Assets/Projects/malaria.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce Purchase Prediction"
              description="This project focuses on predicting user purchase behavior on an e-commerce website based on user event data. The data consists of a CSV file that captures various user interactions, including views, cart additions, and purchases."
              ghLink="https://github.com/taha-magh/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malaria}
              isBlog={false}
              title="Image Classification for Malaria Detection"
              description="This project aims to classify images of parasitized and non-parasitized blood cells using convolutional neural networks (CNNs). Three models are employed: one built from scratch, one based on VGG16, and another based on ResNet50."
              ghLink="https://github.com/taha-magh/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pbx4}
              isBlog={false}
              title="Dashboard: Population and Births in France (2000-2020)"
              description="This dashboard visualizes demographic data to illustrate population and birth trends across France from 2000 to 2020. It includes maps showing population distribution by department and city, charts of annual birth rates, and temporal graphs of demographic changes. Insights inform policy and local initiatives for effective demographic management."
              ghLink="https://github.com/taha-magh/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pbx1}
              isBlog={false}
              title="Dashboard: Visualizing HR Data and Addressing Gender Imbalance"
              description="This dashboard visualizes HR data to highlight gender KPIs and the slow progress toward gender balance in executive roles. It includes charts on gender distribution, trends in female representation, and promotion rates, identifying root causes and offering recommendations for improvement."
              ghLink="https://github.com/taha-magh/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pbx5}
              isBlog={false}
              title="Dashboard: Olympic Games Analysis"
              description="This dashboard visualizes key Olympic Games metrics including medal standings, athlete performance, audience engagement, economic impact, and historical comparisons. It aims to provide actionable insights for strategic decision-making and understanding the event's global impact."
              ghLink="https://github.com/taha-magh/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pbx2}
              isBlog={false}
              title="Dashboard: Visualising customer and agent behaviour"
              description="Create a Power BI dashboard to visualize key KPIs and metrics from the provided dataset, focusing on customer and agent behavior. Utilize provided resources like podcasts and articles to improve your understanding of data visualization. The dashboard should be well-designed to meet the client's request, clearly reflecting the requested KPIs and insights."
              ghLink="https://github.com/taha-magh/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pbx3}
              isBlog={false}
              title="Dashboard: Customer demographics and insights."
              description="This dashboard uses defined KPIs to reflect customer demographics and insights. It includes visualizations on customer age distribution, geographic location, purchasing behavior, and product preferences. The data highlights key trends and patterns to provide actionable insights for decision-making."
              ghLink="https://github.com/taha-magh/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/taha-magh/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/taha-magh/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/taha-magh/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marrakech}
              isBlog={false}
              title="Integrated IT System for the Municipality of Marrakech"
              description="This project involved analyzing requirements and drafting specifications, designing system architecture, developing the backend with Spring Boot, creating user interfaces with Angular, implementing tests, deploying to production using CI/CD pipelines, and configuring the database with SQL Server."
              ghLink="https://github.com/taha-magh/Stage-Back/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fst}
              isBlog={false}
              title="Application Web for Tax Management"
              description="Develop a web application for tax management using technologies like HTML, CSS, Spring, Angular, and SQL. Ensure the application effectively manages tax-related processes and data, providing a user-friendly interface for users to interact with."
              ghLink="https://github.com/taha-magh/Stage-Back/tree/master"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
