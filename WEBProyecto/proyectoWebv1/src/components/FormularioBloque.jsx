import React, { useState } from 'react';
import { addBloque } from '../api/bloqueApi';

export default function FormularioBloque({ onBloqueCreado, dificultad = 1, ultimoBloque }) {
  const [data, setData] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    // Prepara el bloque con solo los datos necesarios
    const nuevoBloque = {
      data,
      previousHash: ultimoBloque ? ultimoBloque.hash : '0',
      blockIndex: ultimoBloque ? ultimoBloque.blockIndex + 1 : 1,
      dificultad
    };
    try {
      await addBloque(nuevoBloque);
      setMensaje('Bloque creado correctamente');
      setData('');
      if (onBloqueCreado) onBloqueCreado();
    } catch (err) {
      setMensaje('Error al crear el bloque');
    }
  };

  return null;
}