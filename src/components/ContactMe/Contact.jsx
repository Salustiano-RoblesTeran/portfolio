import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Contact = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contáctame</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Escribe tu mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary">
          Enviar Mensaje
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Contact;
