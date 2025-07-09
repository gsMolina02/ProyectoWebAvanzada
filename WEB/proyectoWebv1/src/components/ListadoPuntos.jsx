import React from 'react';
import '../css/blockchain.css';

export default function ListadoPuntos({ puntos }) {
  return (
    <div className="modern-card text-center">
      <h4 className="modern-card-title">💎 Mining Rewards</h4>
      <div className="points-display">
        <div className="points-icon">₿</div>
        <div className="points-number">{puntos}</div>
        <div className="points-label">BTC Minados</div>
      </div>
      <div className="points-info">
        Ganas 1 BTC por cada bloque minado exitosamente
      </div>
      <div className="mining-stats">
        <div className="stat-row">
          <span>Hash Rate:</span>
          <span>{puntos * 2.5} GH/s</span>
        </div>
        <div className="stat-row">
          <span>Última recompensa:</span>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}