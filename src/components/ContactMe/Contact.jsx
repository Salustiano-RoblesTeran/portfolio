import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      name,
      email,
      message,
    };

    // Enviar el mensaje a ti mismo
    emailjs.send('service_ku4e0cv', 'template_8c20n0v', templateParams, 'U2-FvwKnksgf2wNka')
      .then((response) => {
        console.log('Mensaje enviado a ti exitosamente!', response.status, response.text);

        // Enviar correo de confirmación al remitente
        emailjs.send('service_ku4e0cv', 'template_q2zl61h', { email }, 'U2-FvwKnksgf2wNka')
          .then(() => {
            alert('Mensaje enviado exitosamente y se ha enviado un correo de confirmación al remitente.');
            handleClose(); // Cierra el modal
            // Reinicia los campos
            setName('');
            setEmail('');
            setMessage('');
          })
          .catch((error) => {
            console.error('Error al enviar el correo de confirmación:', error);
            alert('Mensaje enviado, pero hubo un problema al enviar el correo de confirmación.');
          });
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Error al enviar el mensaje, por favor intenta de nuevo.');
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contáctame</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Escribe tu mensaje</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Enviar Mensaje
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Contact;
