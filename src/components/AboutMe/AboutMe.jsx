import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import Profile2 from '../../assets/profile/profile2.jpeg';

const AboutMe = () => {
  return (
    <Container className="my-5" id='about-me'>
      <Row className="align-items-center">
      <Col md={12} className="text-center">
          <h2>Un poco sobre mi...</h2>
        </Col>
        <Col md={4} className="text-center">
          <img
            src={Profile2}
            alt="Perfil"
            className="img-fluid rounded mb-3"
            style={{ width: '350px', height: '350px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <Row className="gy-4">
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <FaBriefcase size={50} className="mb-3" />
                  <Card.Title>Experiencia</Card.Title>
                  <Card.Text>1 año de experiencia como freelancer Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <FaGraduationCap size={50} className="mb-3" />
                  <Card.Title>Educación</Card.Title>
                  <Card.Text>Graduado fullstack en la academia Rolling Code</Card.Text>
                  <Card.Text>Estudiante de 3er año de Ingeniería Informática en la Universidad del Norte Santo Tomas de Aquino</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              <Card className="mt-4">
                <Card.Body>
                  <Card.Text>
                  Soy estudiante de tercer año de Ingeniería Informática y un programador apasionado por el desarrollo backend. Me encanta trabajar en la arquitectura y lógica que impulsa las aplicaciones, siempre buscando soluciones eficientes y escalables. A lo largo de mi formación, he adquirido experiencia en diversas tecnologías y lenguajes de programación, y disfruto enfrentando nuevos retos que me permiten seguir aprendiendo y mejorando mis habilidades en el desarrollo de software.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
