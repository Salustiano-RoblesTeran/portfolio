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
                  <Card.Text>Desarrollador freelance con 1 año de experiencia, especializado en la creación de aplicaciones web. He trabajado en proyectos que incluyen diseño de interfaces, desarrollo backend.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <FaGraduationCap size={50} className="mb-3" />
                  <Card.Title>Educación</Card.Title>
                  <Card.Text>FullStack Developer: Graduado de la academia Rolling Code, donde adquirí el MERN stack</Card.Text>
                  <Card.Text>Ing. Informática: Actualmente cursando el 3er año en la Universidad del Norte Santo Tomás de Aquino.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              <Card className="mt-4">
                <Card.Body>
                  <Card.Text>
                  Soy estudiante de tercer año de Ingeniería Informática y un programador apasionado por el desarrollo web. Recientemente recibí mi certificación por parte de Rolling Code School como FullStack Developer, Me encanta trabajar en la arquitectura y lógica que impulsa las aplicaciones, siempre buscando soluciones eficientes y escalables. Disfruto enfrentando nuevos retos que me permiten seguir aprendiendo y mejorando mis habilidades en el desarrollo de software.
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
