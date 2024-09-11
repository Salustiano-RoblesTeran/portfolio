import React from 'react';
import { Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ProfilePicture from '../../assets/profile/profile.png';
import './Profile.css'; // Puedes definir tus propios estilos en un archivo CSS

const Profile = ({handleShow}) => {
  return (
    <div className="container my-5 pt-5">
      <div className="row justify-content-center align-items-center">
        {/* Imagen */}
        <div className="col-md-4 text-center mb-4 mb-md-0"> {/* Añadido mb-4 para margen en la parte inferior */}
          <img 
            src={ProfilePicture} 
            alt="Salustiano Robles Teran"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        {/* Información */}
        <div className="col-md-6 text-center text-md-start">
          <p className="text-muted">¡Hola! mi nombre es</p>
          <h1 className="fw-bold">Salustiano Robles Teran</h1>
          <h4 className="text-secondary">Full Stack Developer</h4>

          {/* Botones */}
          <div className="my-4">
            <Button variant="outline-dark" className="me-2">Download CV</Button>
            <Button variant="dark" onClick={handleShow}>Contact Info</Button>
          </div>

          {/* Iconos de redes sociales */}
          <div className="d-flex justify-content-center justify-content-md-start">
            <a href="https://www.linkedin.com/in/salustiano-robles-teran-1b815920a/" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Salustiano-RoblesTeran" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
