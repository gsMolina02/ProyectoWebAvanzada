import React from 'react';
import IntegranteCard from './IntegranteCard';

export default function ListaIntegrantes({ personas, openId, toggleCollapse, placeholder }) {
  return (
    <div className="lista-integrantes-container">
      {personas.map((persona) => (
        <div key={persona.id} className="lista-integrantes-item">
          <IntegranteCard
            persona={persona}
            openId={openId}
            toggleCollapse={toggleCollapse}
            placeholder={placeholder}
          />
        </div>
      ))}
    </div>
  );
}