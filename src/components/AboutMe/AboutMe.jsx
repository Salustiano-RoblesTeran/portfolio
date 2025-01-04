import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <Container className="my-5 text-center" id='about-me'>
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="mb-4">
          <h3>Desarrollador Front-End y Estudiante de Ingeniería Informática</h3>
        </Col>
        <Col md={8}>
          <Row className="gy-4 justify-content-center">
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <FaGraduationCap size={50} className="mb-3" />
                  <Card.Title>Educación</Card.Title>
                  <Card.Text className='text-start'>
                    Ingeniería Informática – 4to año en la Universidad del Norte Santo Tomás de Aquino.
                  </Card.Text>
                  <Card.Text className='text-start'>
                    Full Stack Developer – Graduado de Rolling Code Academy (MERN Stack).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <FaBriefcase size={50} className="mb-3" />
                  <Card.Title>Experiencia</Card.Title>
                  <Card.Text className='text-start'>
                    Desarrollador Front-end con 1 año de experiencia creando aplicaciones web dinámicas y eficientes, especializado en frontend y backend para ofrecer interfaces atractivas y sistemas robustos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              <Card className="mt-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Sobre mí</Card.Title>
                  <Card.Text className='text-start'>
                    Soy estudiante de 4to año de Ingeniería Informática y desarrollador Full Stack con experiencia en sistemas de gestión web. Trabajo con JavaScript, Node.js y React, creando aplicaciones con lógica sólida y interfaces atractivas. He desarrollado proyectos como un CRM para reparaciones con gestión de clientes y WhatsApp automatizado, y un sistema para cruzar datos de e-commerce con Mercado Pago, generando informes en Excel. Me apasiona crear sin límites y mi objetivo es liderar un equipo de desarrollo, inspirando a otros a construir soluciones innovadoras.
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
