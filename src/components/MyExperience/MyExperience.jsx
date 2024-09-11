import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", level: "Avanzado" },
      { name: "CSS", level: "Intermedio" },
      { name: "Bootstrap", level: "Avanzado" },
      { name: "React", level: "Intermedio" },
      { name: "JavaScript", level: "Avanzado" },
      { name: "TypeScript", level: "Intermedio" },

    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "MongoDB", level: "Intermedio" },
      { name: "Node JS", level: "Intermedio" },
      { name: "Express JS", level: "Intermedio" },
      { name: "Git", level: "Intermedio" },
      { name: "Java", level: "Intermedio" },
      { name: "SpringBoot", level: "Intermedio" },
    ],
  },
];

const MyExperience = () => {
  return (
    <Container className="my-5" id='experience'>
      <h2 className="text-center mb-4"> <span className="fw-bold">Mis Skills</span></h2>
      <Row>
        {skills.map((skillCategory, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-center mb-3 fw-bold">
                  {skillCategory.category}
                </Card.Title>
                <Row>
                  {skillCategory.items.map((skill, i) => (
                    <Col key={i} xs={6} className="mb-2">
                      <FaCheckCircle className="me-2" />
                      <strong>{skill.name}</strong>
                      <p className="mb-0">{skill.level}</p>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyExperience;
