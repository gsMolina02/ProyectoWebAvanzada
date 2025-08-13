import React from 'react'
import mascota from '../img/mascota.jpg';

export default function MascotaLogo() {
  return (
    <div className="mascota-container">
      <img 
        src={mascota} 
        alt="Mascota de Sistemas" 
        className="mascota-img"
        style={{width: 160, height: 160, objectFit: 'cover'}} 
      />
      <div className="mascota-text">Mascota de Sistemas</div>
    </div>
  );
}