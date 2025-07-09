import React from 'react';

export default function IntegranteCard({ persona, openId, toggleCollapse, placeholder }) {
  return (
    <div className="integrante-card">
      <h5 
        className="card-title integrante-nombre" 
        style={{
          color: '#ffffff',
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.7)',
          fontWeight: '700',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
          background: 'none',
          WebkitTextFillColor: '#ffffff'
        }}
      >
        {persona.nombre}
      </h5>
      <img
        onClick={() => toggleCollapse(persona.id)}
        src={persona.foto || placeholder}
        alt={`Foto de ${persona.nombre}`}
        className="img-hover"
        style={{
          width: '120px',
          height: '120px',
          objectFit: 'cover',
          borderRadius: '50%',
          margin: '0 auto 1rem',
          cursor: 'pointer',
          display: 'block'
        }}
      />
      {openId === persona.id && (
        <div>
          <div className="card-text" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)' }}>
            <strong>ID:</strong> {persona.id}
          </div>
          <div className="card-text" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)' }}>
            <strong>Email:</strong> {persona.email}
          </div>
          <div className="card-text" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)' }}>
            <strong>GitHub: </strong>
            <a href={persona.github} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
              <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </div>
          <div className="card-text" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)' }}>
            {persona.descripcion}
          </div>
          <a
            className="btn mt-2"
            href={`mailto:${persona.email}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(45, 85, 255, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            Contactar
          </a>
        </div>
      )}
      <div className="text-muted small mt-2" style={{ color: 'rgba(255, 255, 255, 0.7)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)' }}>
        Haz clic en la foto para ver más
      </div>
    </div>
  );
}