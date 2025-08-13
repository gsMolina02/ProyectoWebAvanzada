import axios from 'axios';

const API_URL = 'http://localhost:8080/api/usuarios';

export const loginUsuario = async (usuario, contrasena) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { nombre: usuario, contrasena });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registrarUsuario = async (usuario, correo, contrasena) => {
  try {
    const response = await axios.post(`${API_URL}/registro`, { nombre: usuario, correo, contrasena });
    return response.data;
  } catch (error) {
    throw error;
  }
};