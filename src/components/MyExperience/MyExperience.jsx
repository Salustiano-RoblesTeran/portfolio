import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "ReactJs" },
      { name: "NextJs" },
      { name: "Bootstrap" },
      { name: "Tailwind" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Node JS" },
      { name: "Docker" },
    ],
  },
];

const MyExperience = () => {
  return (
    <Container fluid className="my-5 px-5" id='experience'>
      <Container>
        <Row className="justify-content-center">
          {/* Offset para centrar las dos columnas en el medio */}
          <Col md={5} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-3 fw-bold">
                  {skills[0].category}
                </Card.Title>
                <Row>
                  {skills[0].items.map((skill, i) => (
                    <Col key={i} xs={6} className="mb-2">
                      <FaCheckCircle className="me-2" />
                      <strong>{skill.name}</strong>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-3 fw-bold">
                  {skills[1].category}
                </Card.Title>
                <Row>
                  {skills[1].items.map((skill, i) => (
                    <Col key={i} xs={6} className="mb-2">
                      <FaCheckCircle className="me-2" />
                      <strong>{skill.name}</strong>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MyExperience;
