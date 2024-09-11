import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = ({handleShow}) => {
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <footer className="bg-light text-center py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4">Contactame</h2>
            <div className="d-flex justify-content-center align-items-center">
              <a href="saluroblesteran@gmail.com" className="btn btn-outline-dark d-flex align-items-center me-3">
                <FaEnvelope className="me-2" />
                saluroblesteran@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/salustiano-robles-teran-1b815920a/" target='blank' className="btn btn-outline-dark d-flex align-items-center">
                <FaLinkedin className="me-2" />
                LinkedIn
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <ul className="list-inline">
              <li className="list-inline-item mx-3">
                <a href="#about" className="text-dark" onClick={(e) => handleScroll(e, 'about-me')}>Sobre Mi</a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#experience" className="text-dark" onClick={(e) => handleScroll(e, 'experience')} >Mi Experiencia</a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#projects" className="text-dark" onClick={(e) => handleScroll(e, 'projects')}>Proyectos</a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#contact" className="text-dark" onClick={handleShow}>Contacto</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-muted mb-0">
              Desarrollado por Salustiano Robles Teran<br/> Ultima Actualizacion 2024.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
