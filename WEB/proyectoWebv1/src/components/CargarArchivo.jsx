import { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';

export default function CargarArchivo() {
  const [archivo, setArchivo] = useState(null);
  const [textoPrueba, setTextoPrueba] = useState('');
  const [archivosCargados, setArchivosCargados] = useState([]);

  const handleArchivoChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleTextoChange = (e) => {
    setTextoPrueba(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!archivo) {
      alert('Por favor selecciona un archivo');
      return;
    }

    if (!archivo.name.endsWith('.enc')) {
      alert('Solo se permiten archivos con extensión .enc');
      return;
    }

    const nuevoArchivo = {
      id: Date.now(),
      titulo: textoPrueba,
      archivo: archivo,
      url: URL.createObjectURL(archivo)
    };

    setArchivosCargados((prev) => [...prev, nuevoArchivo]);
    setArchivo(null);
    setTextoPrueba('');
  };

  const eliminarArchivo = (id) => {
    setArchivosCargados((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <Container className="vh-100 d-flex flex-column justify-content-start align-items-center py-5">
      <h2 className="mb-4 text-center">Cargar Archivo</h2>
      <Form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
        <Form.Group controlId="formArchivo" className="mb-3">
          <Form.Label>Selecciona un archivo (.enc)</Form.Label>
          <Form.Control type="file" onChange={handleArchivoChange} />
          {archivo && (
            <div className="mt-2 text-muted">Archivo seleccionado: {archivo.name}</div>
          )}
        </Form.Group>

        <Form.Group controlId="formTextoPrueba" className="mb-3">
          <Form.Label>Título del archivo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribe un título..."
            value={textoPrueba}
            onChange={handleTextoChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Procesar
        </Button>
      </Form>

      {archivosCargados.length > 0 && (
        <div className="mt-5 w-100">
          <h4 className="mb-3">Archivos Cargados</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Título del archivo</th>
                <th>Archivo</th>
                <th>Métodos</th>
              </tr>
            </thead>
            <tbody>
              {archivosCargados.map((item) => (
                <tr key={item.id}>
                  <td>{item.titulo}</td>
                  <td>{item.archivo.name}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      className="me-2"
                      onClick={() => eliminarArchivo(item.id)}
                    >
                      Eliminar
                    </Button>
                    <a
                      href={item.url}
                      download={item.archivo.name}
                      className="btn btn-success btn-sm"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
}
