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
<div className="card-text" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)' }}>
  <a
    href={persona.github}
    target="_blank"
    rel="noopener noreferrer"
    className="github-link"
    title="Ver perfil de GitHub"
    style={{ display: 'inline-flex', alignItems: 'center', color: '#fff', textDecoration: 'none', marginTop: '8px' }}
  >
    <svg
      height="22"
      width="22"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      style={{ verticalAlign: 'middle' }}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
      -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
      -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65
      7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
      2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
      1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  </a>
</div>
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