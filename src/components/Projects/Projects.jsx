import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: "Project One",
    image: "https://via.placeholder.com/300x200", // Puedes cambiar esto a la URL real de la imagen
    description: "Better Communication with Each Other",
    github: "#",
    demo: "https://prueba.saluroblesteran.com/",
  },
  {
    title: "Project Two",
    image: "https://via.placeholder.com/300x200",
    description: "Stop Scrolling! I have something to tell you",
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    image: "https://via.placeholder.com/300x200",
    description: "Available now on the app. Order and receive 15% off.",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <Container className="my-5" id='projects'>
      <h2 className="text-center mb-4">Mis Proyectos <span className="fw-bold">Destacados</span></h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={project.image} alt={project.title} className="rounded-top" />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="outline-dark" href={project.github} className="me-2">
                  Github
                </Button>
                <Button variant="outline-dark" href={project.demo}>
                  Live Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
