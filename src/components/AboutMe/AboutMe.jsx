import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const AboutMe = ({ texts }) => {
  return (
    <Container className="my-5 text-center" id="about-me">
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="mb-4">
          <h3>{texts.aboutMe.title}</h3>
        </Col>
        <Col md={8}>
          <Row className="gy-4 justify-content-center">
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <FaGraduationCap size={50} className="mb-3" />
                  <Card.Title>{texts.aboutMe.education.title}</Card.Title>
                  <Card.Text className="text-start">
                    {texts.aboutMe.education.university}
                  </Card.Text>
                  <Card.Text className="text-start">
                    {texts.aboutMe.education.bootcamp}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <FaBriefcase size={50} className="mb-3" />
                  <Card.Title>{texts.aboutMe.experience.title}</Card.Title>
                  <Card.Text className="text-start">
                    {texts.aboutMe.experience.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              <Card className="mt-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{texts.aboutMe.aboutMe.title}</Card.Title>
                  <Card.Text className="text-start">
                    {texts.aboutMe.aboutMe.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
