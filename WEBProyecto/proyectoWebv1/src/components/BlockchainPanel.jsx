import React, { useState, useEffect } from 'react';
import { getBloquesPorUsuario } from '../api/bloqueApi';
import FormularioBloque from './FormularioBloque';
import ListadoCadena from './ListadoCadena';
import Auditoria from './Auditoria';
import Configuracion from './Configuracion';

export default function BlockchainPanel(usuarioLogueado) {
  const [bloques, setBloques] = useState([]);
  const [ceros, setCeros] = useState(1);
  const [dataBloque, setDataBloque] = useState('');

  const cargarBloques = () => {
    if (!usuarioLogueado || !usuarioLogueado.usuarioLogueado || !usuarioLogueado.usuarioLogueado.id) return;
    getBloquesPorUsuario(usuarioLogueado.usuarioLogueado.id)
      .then(res => setBloques(res.data));
  };

  useEffect(() => {
    cargarBloques();
    // eslint-disable-next-line
  }, [usuarioLogueado]);

  // Obtener el último bloque para el formulario
  const ultimoBloque = bloques.length > 0 ? bloques[bloques.length - 1] : null;

  return (
    <div>
      <h2>Panel Blockchain</h2>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
  <Configuracion ceros={ceros} setCeros={setCeros} usuarioLogueado={usuarioLogueado} onGenerar={cargarBloques} />
     </div>
      {/* Formulario para crear bloques, oculto pero funcional */}
      <FormularioBloque
        id="form-bloque"
        onBloqueCreado={cargarBloques}
        dificultad={parseInt(ceros)}
        ultimoBloque={ultimoBloque}
        dataProp={dataBloque}
        setDataProp={setDataBloque}
      />
      {/* Listado de bloques */}
      <ListadoCadena bloques={bloques} />
  {/* Auditoría de la cadena */}
  <Auditoria bloques={bloques} usuarioLogueado={usuarioLogueado.usuarioLogueado} />
    </div>
  );
}