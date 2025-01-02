import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import devTreeImage from '../../assets/imgPreview/devTree.png'
import fitnessTrack from '../../assets/imgPreview/fitnessTrack.png'
import bienesRaices from '../../assets/imgPreview/bienesRaices.png'

const projects = [
  {
    title: "DevTree",
    image: devTreeImage, 
    description: "Crea un perfil, y manten todas tus redes sociales en un solo lugar.",
    github: "https://github.com/Salustiano-RoblesTeran/devtree_front",
    demo: "https://devtree.saluroblesteran.com/",
  },
  {
    title: "FitnessTrack",
    image: fitnessTrack,
    description: "Gestiona tu rutina de gimansio, registra tu progreso, y mucho mas.",
    github: "https://github.com/Salustiano-RoblesTeran/fitnessTrack-front",
    demo: "https://fitnesstrack.saluroblesteran.com/",
  },
  {
    title: "BienesRaices",
    image: bienesRaices,
    description: "Plataforma donde publicar, buscar y comprar casa, departamentos y mucho mas.",
    github: "https://github.com/Salustiano-RoblesTeran/bienesraices",
    demo: "https://bienesraices.saluroblesteran.com/",
  },
];

const Projects = () => {
  return (
    <Container className="my-5" id='projects'>
      <h2 className="text-center mb-4">Mis Proyectos <span className="fw-bold">Destacados</span></h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Suaviza la transición
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // Hace que la tarjeta se agrande ligeramente
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)'; // Añade sombra
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // Vuelve al tamaño original
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'; // Sombra más suave
                }}
              >
                <Card.Img variant="top" src={project.image} alt={project.title} className="rounded-top" />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="outline-dark"
                    href={project.github}
                    className="me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Button>
                  <Button variant="outline-dark" href={project.demo} target="_blank" rel="noopener noreferrer">
                    Visitar
                  </Button>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
