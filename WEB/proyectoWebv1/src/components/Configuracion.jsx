import '../css/configuracion.css';

export default function Configuracion({ ceros, setCeros }) {
  return (
    <div className="configuracion-container">
      <h4 className="configuracion-title">
        ⚙️ Configuración de Mining
      </h4>
      <div className="blockchain-config">
        <label className="configuracion-label">Dificultad de Mining (Ceros requeridos):</label>
        <input
          type="number"
          className="configuracion-input"
          value={ceros}
          min={0}
          max={10}
          onChange={e => setCeros(e.target.value)}
        />
        <small className="config-help">
          A mayor número de ceros, mayor dificultad computacional
        </small>
      </div>
      
      <div className="blockchain-info">
        <h5>🔗 Estado de la Red</h5>
        <div className="network-stats">
          <div className="stat-item">
            <span className="stat-label">Dificultad actual:</span>
            <span className="stat-value">{ceros} ceros</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Tiempo estimado por bloque:</span>
            <span className="stat-value">{Math.pow(2, ceros)} ms</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Red:</span>
            <span className="stat-value">Testnet Local</span>
          </div>
        </div>
      </div>
    </div>
  );
}