import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default function CargarArchivo() {
  const [archivo, setArchivo] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState(''); // ← Mensaje de éxito

  const extensionesPermitidas = ['.enc', '.crypt'];

  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      if (extensionesPermitidas.includes(extension)) {
        setArchivo(file);
        setError('');
        setExito('');
      } else {
        setArchivo(null);
        setError('Solo se permiten archivos encriptados (.enc, .crypt)');
        setExito('');
      }
    }
  };

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleQuitarArchivo = () => {
    setArchivo(null);
    setExito('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!archivo) {
      setError('Debes seleccionar un archivo encriptado válido.');
      setExito('');
      return;
    }

    if (!titulo.trim()) {
      setError('Debes ingresar un título para el archivo.');
      setExito('');
      return;
    }

    // Simulación de carga válida
    console.log('Archivo:', archivo);
    console.log('Título:', titulo);

    setError('');
    setExito('✅ Archivo y título cargados correctamente.');
  };

  return (
    <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2 className="mb-4 text-center">Cargar Archivo</h2>
      <Form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        {exito && <Alert variant="success">{exito}</Alert>}

        {/* Input de archivo */}
        <Form.Group controlId="formArchivo" className="mb-3">
          <Form.Label>Selecciona un archivo encriptado (.enc, .crypt)</Form.Label>
          <Form.Control
            type="file"
            onChange={handleArchivoChange}
            disabled={archivo !== null}
          />
          {archivo && (
            <>
              <div className="mt-2 text-muted">Archivo seleccionado: {archivo.name}</div>
              <Button
                variant="secondary"
                size="sm"
                className="mt-2"
                onClick={handleQuitarArchivo}
              >
                Quitar archivo
              </Button>
            </>
          )}
        </Form.Group>

        {/* Título del archivo */}
        <Form.Group controlId="formTituloArchivo" className="mb-3">
          <Form.Label>Título del archivo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Contrato encriptado"
            value={titulo}
            onChange={handleTituloChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Procesar
        </Button>
      </Form>
    </Container>
  );
}
