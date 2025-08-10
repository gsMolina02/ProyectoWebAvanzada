import React, { useState } from 'react';
import './index.css';
import './App.css';
import Login from './components/Login';
import Bienvenida from './components/Bienvenida';
import CargarArchivo from './components/CargarArchivo';
import ListadoCadena from './components/ListadoCadena';
import Auditoria from './components/Auditoria';
import Ayuda from './components/Ayuda';
import MascotaLogo from './components/MascotaLogo';
import ListadoPuntos from './components/ListadoPuntos';
import Navegacion from './components/Navegacion';
import Perfil from './components/Perfil';
import BlockchainPanel from './components/BlockchainPanel';

export default function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const [vistaActual, setVistaActual] = useState('bienvenida');
  const [cadenas, setCadenas] = useState([
    { nombre: 'archivo1.txt', texto: 'Cadena de ejemplo 1' },
    { nombre: 'archivo2.txt', texto: 'Cadena de ejemplo 2' }
  ]);
  const [puntos, setPuntos] = useState(2);
  const [ceros, setCeros] = useState(2);
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  const handleIrPerfil = () => setMostrarPerfil(true);
  const handleCerrarPerfil = () => setMostrarPerfil(false);

  if (!autenticado) {
    // Login debe llamar a onLogin(usuario) con el usuario logueado
    return <Login onLogin={(usuario) => { setUsuarioLogueado(usuario); setAutenticado(true); }} />;
  }

  const cambiarVista = (nueva) => {
    setVistaActual(nueva);
    setMostrarPerfil(false);
  };

  return (
    <div className="app-with-navbar">
      <Navegacion
        vistaActual={vistaActual}
        onCambiarVista={cambiarVista}
        usuarioLogueado={usuarioLogueado}
        onIrPerfil={handleIrPerfil}
      />
      {mostrarPerfil ? (
        <Perfil usuario={usuarioLogueado} />
      ) : vistaActual === 'bienvenida' ? (
        <Bienvenida onExplorarFunciones={() => cambiarVista('funciones')} />
      ) : (
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
                {/* <Configuracion ceros={ceros} setCeros={setCeros} /> */}
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
              <div className="flex-fill">
<BlockchainPanel usuarioLogueado={usuarioLogueado} /></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}