import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";



import suicide from "../../Assets/Projects/evidentlyai.png";
import bitsOfCode from "../../Assets/Projects/Streamlit.png";
import dockerLogo from "../../Assets/th.jpeg"; // Adjust path if needed


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
              imgPath={dockerLogo}
              isBlog={false}
              title="My Containerized Creations "
              description=""
              ghLink="https://github.com/Sneha-Naraniwal/Docker/tree/main/DockSpace-main"
              demolink="https://github.com/Sneha-Naraniwal/Docker/tree/main/DockSpace-main"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Streamlit Dashboard for Visualisation"
              description=""
              ghLink="https://github.com/Sneha-Naraniwal/Docker/tree/main/DockSpace-main/2.%20Dockerized%20Streamlit%20Development%20Environment"
              demoLink="https://github.com/Sneha-Naraniwal/Docker/tree/main/DockSpace-main/2.%20Dockerized%20Streamlit%20Development%20Environment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Evidently AI : Voyage into Data Monitoring"
              description=""
              ghLink="https://github.com/Sneha-Naraniwal/Docker/tree/main/DockSpace-main/8.%20Evidently%20AI%20Sets%20Sail%20in%20Docker"
              demoLink="https://github.com/Sneha-Naraniwal/Docker/tree/main/DockSpace-main/8.%20Evidently%20AI%20Sets%20Sail%20in%20Docker"
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Local-Connect"
              description="Developed a fully functional e-commerce website. the platform allows users to browse, search, and purchase products,
featuring a user-friendly interface and secure authentication."
              ghLink="hhttps://github.com/Shashank-singh001/Local-Connect"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
