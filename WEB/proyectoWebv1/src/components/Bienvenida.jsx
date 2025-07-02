import { useState } from 'react';
import { Container, Row, Col, Card, Collapse, Button } from 'react-bootstrap';
import daniFoto from '../img/dani.jpg';

export default function Bienvenida({ onIrACargar }) {
  const [openId, setOpenId] = useState(null);

  const personas = [
    {
      id: 'L00418754',
      nombre: 'Daniela Tituaña',
      foto: daniFoto,
      email: 'dltituana1@espe.edu.ec',
      github: 'https://github.com/DanielaLTM2206',
      descripcion: 'Desarrolladora Frontend apasionada por React y el diseño UI.',
    },
    {
      id: 'L00400869',
      nombre: 'Gustavo Molina',
      foto: '',
      email: 'gsmolina2@espe.edu.ec',
      github: 'https://github.com/gsMolina02',
      descripcion: 'Ingeniero de software con interés en backend y bases de datos.',
    },
  ];

  const toggleCollapse = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const placeholder = 'https://via.placeholder.com/120';

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="mb-3 text-center">Bienvenidos</h2>

      {/* Botón para navegar a cargar archivo */}
      <Button className="mb-4" onClick={onIrACargar}>
        Ir a cargar archivo
      </Button>

      <Row className="justify-content-center w-100">
        {personas.map((persona) => (
          <Col key={persona.id} xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="text-center shadow-sm">
              <Card.Body>
                <Card.Title>{persona.nombre}</Card.Title>

                <Card.Img
                  onClick={() => toggleCollapse(persona.id)}
                  variant="top"
                  src={persona.foto || placeholder}
                  alt={`Foto de ${persona.nombre}`}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    cursor: 'pointer',
                  }}
                />

                <Collapse in={openId === persona.id}>
                  <div>
                    <Card.Text><strong>ID:</strong> {persona.id}</Card.Text>
                    <Card.Text><strong>Email:</strong> {persona.email}</Card.Text>
                    <Card.Text>
                      <strong>GitHub: </strong>
                      <a href={persona.github} target="_blank" rel="noopener noreferrer" className="text-dark">
                        <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
                      </a>
                    </Card.Text>
                    <Card.Text>{persona.descripcion}</Card.Text>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
