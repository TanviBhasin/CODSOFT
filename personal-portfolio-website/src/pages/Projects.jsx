import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import ashion from "../assets/projects/ashion.png";
import foodpicky from "../assets/projects/foodpicky.png";
import credvision from "../assets/projects/credvision.png";
import todo from "../assets/projects/todo.png";
import elearning from "../assets/projects/elearning.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ashion}
              isBlog={false}
              title="ASHION"
              description="This is a project on E-commerce website. ASHION sells clothes , cosmetics, jewellery, shoes for men, women and kids etc."
              ghLink="https://github.com/TanviBhasin/PHP-PROJECTS/tree/main/php_project"
              demoLink="http://ashion.42web.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodpicky}
              isBlog={false}
              title="Foodpicky"
              description="This project is about ordering online food from your local restaurants. Anybody can create an account and order online.Technologies Used- PHP,SQL,BOOTSTRAP,AJAX,JQUERY"
              ghLink="https://github.com/TanviBhasin/PHP-PROJECTS/tree/main/foodpicky"
              demoLink="http://foodpicky.great-site.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credvision}
              isBlog={false}
              title="CredVision"
              description="Credit Card Application Approval- Front End :- Web Application using Flask. Back End :- Machine Learning Using Python. Datasets :- UCI Machine Learning Repository. Jupyter Notebook. Description :- A project on automatic credit card approval prediction using machine learning techniques."
              ghLink="https://github.com/TanviBhasin/Flask-App"
              demoLink="https://credvision.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearning}
              isBlog={false}
              title="eLEARNING"
              description="This e-learning website features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React and styled-components for a seamless experience.E-learning website made using MONGODB, Reactjs, ExpressJs, NodeJs."
              ghLink="https://github.com/TanviBhasin/MERN_Stack_Project"
              demoLink="https://mern-elearning.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do App"
              description="This application is made using React js.A To-Do application built with ReactJS, showcasing task management with add, view, edit, and delete functionalities. Utilizes Redux for state management and persistent storage with Local Storage"
              ghLink="https://github.com/TanviBhasin/Todo"
              demoLink="https://to-do-list-pjs.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects