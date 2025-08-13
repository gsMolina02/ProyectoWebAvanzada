import React, { useState } from 'react';
import '../css/cargarArchivo.css';
import FormularioBloque from './FormularioBloque';

export default function CargarArchivo({ onArchivoCargado }) {
  const [archivos, setArchivos] = useState([]);
  const [texto, setTexto] = useState('');

  const handleArchivo = (e) => {
    setArchivos(Array.from(e.target.files));
  };

  const handleCargar = () => {
    if (archivos.length > 0) {
      archivos.forEach((archivo) => {
        if (onArchivoCargado) {
          onArchivoCargado(archivo, texto);
        }
      });
      setArchivos([]);
      setTexto('');
    }
  };

  return (
    <div 
      className="modern-card" 
      style={{
        background: 'rgba(30, 30, 30, 0.8)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        color: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}
    >
      <h4 
        className="modern-card-title"
        style={{
          color: 'rgba(255, 255, 255, 0.95)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          fontWeight: '700',
          fontSize: '1.5rem',
          marginBottom: '1rem'
        }}
      >
        Cargar Archivos
      </h4>

      <div className="file-input-container">
        <input
          type="file"
          className="modern-file-input"
          multiple
          onChange={handleArchivo}
          id="file-upload"
        />
        <label htmlFor="file-upload" className="modern-file-label">
          <span className="file-icon">▼</span>
          <span>Seleccionar archivos</span>
        </label>
      </div>

      <textarea
        className="modern-input"
        placeholder="Texto de prueba (opcional)"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows="3"
        style={{ 
          marginTop: '1rem', 
          resize: 'vertical',
          background: 'rgba(60, 60, 60, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          color: '#fff',
          borderRadius: '10px'
        }}
      />

      <button
        className="modern-button w-100"
        onClick={handleCargar}
        disabled={archivos.length === 0}
        style={{ 
          marginTop: '1rem',
          background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          borderRadius: '10px',
          padding: '0.75rem 1.5rem'
        }}
      >
        Cargar Archivos
      </button>

      {archivos.length > 0 && (
        <div className="selected-files">
          <div className="files-header">Archivos seleccionados:</div>
          <div className="files-list">
            {archivos.map((archivo, index) => (
              <div key={index} className="file-item">
                <span className="file-name">{archivo.name}</span>
                <span className="file-size">({(archivo.size / 1024).toFixed(2)} KB)</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
