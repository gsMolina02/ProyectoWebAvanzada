import axios from 'axios';

const API_URL = 'http://localhost:8080/api/bloques';

export const getBloques = () => axios.get(API_URL);
export const addBloque = (bloque) => axios.post(API_URL, bloque);
export const validarCadena = (usuarioId) => axios.get(`${API_URL}/validar/${usuarioId}`);
export const generarBlockchain = (usuarioId, dificultad) =>
  axios.post(`${API_URL}/generar`, { usuarioId, dificultad });
export function getBloquesPorUsuario(usuarioId) {
  return axios.get(`${API_URL}/usuario/${usuarioId}`);
}