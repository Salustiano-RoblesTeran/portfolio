import { Modal, Button, Spinner } from 'react-bootstrap'; // Importamos Spinner
import Swal from 'sweetalert2'; // Para el popup de confirmación
import { useState } from 'react';

const Contact = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado de carga

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Inicia el estado de carga

    try {
      const response = await fetch('https://frabjous-phoenix-7095f0.netlify.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      const result = await response.json();
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: result.message || 'Tu mensaje ha sido enviado exitosamente.',
      });

      setName('');
      setEmail('');
      setMessage('');
      handleClose();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.',
      });
    } finally {
      setIsLoading(false); // Finaliza el estado de carga
    }
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
            <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner animation="border" size="sm" /> Enviando...
                </>
              ) : (
                'Enviar Mensaje'
              )}
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Contact;
