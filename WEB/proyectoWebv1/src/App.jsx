import React, { useState } from 'react';
import './index.css';
import './App.css';
import Login from './components/Login';
import Bienvenida from './components/Bienvenida';
import CargarArchivo from './components/CargarArchivo';
import ListadoCadena from './components/ListadoCadena';
import Auditoria from './components/Auditoria';
import Configuracion from './components/Configuracion';
import Ayuda from './components/Ayuda';
import MascotaLogo from './components/MascotaLogo';
import ListadoPuntos from './components/ListadoPuntos';
import Navegacion from './components/Navegacion';

export default function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [vistaActual, setVistaActual] = useState('bienvenida'); // 'bienvenida' o 'funciones'
  const [cadenas, setCadenas] = useState([
    { nombre: 'archivo1.txt', texto: 'Cadena de ejemplo 1' },
    { nombre: 'archivo2.txt', texto: 'Cadena de ejemplo 2' }
  ]);
  const [puntos, setPuntos] = useState(2);
  const [ceros, setCeros] = useState(2);

  if (!autenticado) {
    return <Login onLogin={() => setAutenticado(true)} />;
  }

  const cambiarVista = (nueva) => {
    setVistaActual(nueva);
  };

  if (vistaActual === 'bienvenida') {
    return (
      <div className="app-with-navbar">
        <Navegacion vistaActual={vistaActual} onCambiarVista={cambiarVista} />
        <Bienvenida onExplorarFunciones={() => cambiarVista('funciones')} />
      </div>
    );
  }

  return (
    <div className="app-with-navbar">
      <Navegacion vistaActual={vistaActual} onCambiarVista={cambiarVista} />
      <div className="funciones-background">
        <div className="container py-4" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
          <div className="funciones-header">
            <h1 className="funciones-title">Panel de Funciones</h1>
            <p className="funciones-subtitle">Gestiona y explora todas las herramientas disponibles</p>
          </div>

          <div className="row g-4" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
            <div className="col-md-12" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
              <div 
                className="d-flex flex-column flex-md-row gap-4 carga-listado-section" 
                style={{ background: 'transparent', backgroundColor: 'transparent' }}
              >
                <div 
                  className="flex-fill d-flex flex-column gap-3" 
                  style={{ background: 'transparent', backgroundColor: 'transparent' }}
                >
                  <CargarArchivo onArchivoCargado={(archivo, texto) => {
                    setCadenas([...cadenas, { nombre: archivo?.name, texto }]);
                    setPuntos(puntos + 1);
                  }} />
                  <ListadoPuntos puntos={puntos} />
                </div>
                <div 
                  className="flex-fill" 
                  style={{ background: 'transparent', backgroundColor: 'transparent' }}
                >
                  <ListadoCadena cadenas={cadenas} />
                </div>
              </div>
            </div>
          </div>

          <div className="section-separator"></div>

          <div className="row g-4 mt-2" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
            <div className="col-md-6" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
              <Auditoria cadenas={cadenas} />
            </div>
            <div className="col-md-6" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
              <Configuracion ceros={ceros} setCeros={setCeros} />
            </div>
          </div>

          <div className="section-separator"></div>

          <div className="row g-4 mt-2" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
            <div className="col-md-4" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
              <Ayuda />
            </div>
            <div className="col-md-4" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
              <MascotaLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}