import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Bienvenida from './Bienvenida';
import CargarArchivo from './CargarArchivo';

export default function Navegacion() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/bienvenida');
  };

  const irACargarArchivo = () => {
    navigate('/cargar');
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/bienvenida" element={<Bienvenida onIrACargar={irACargarArchivo} />} />
      <Route path="/cargar" element={<CargarArchivo />} />
    </Routes>
  );
}
