import React from 'react';

export default function Ayuda() {
  return (
    <div className="ayuda-container">
      <h4 className="ayuda-title">
        Ayuda y Documentación
      </h4>
      <ul className="ayuda-list">
        <li><span className="ayuda-opcion">Carga de archivo:</span> Ve a la sección para cargar un archivo.</li>
        <li><span className="ayuda-opcion">Configuración:</span> Ajusta el número de ceros de la cadena.</li>
        <li><span className="ayuda-opcion">Listado de puntos:</span> Consulta tus puntos acumulados.</li>
        <li>Para más información, contacta al administrador.</li>
      </ul>
    </div>
  );
}