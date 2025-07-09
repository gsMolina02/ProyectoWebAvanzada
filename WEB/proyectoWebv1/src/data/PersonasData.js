import daniFoto from '../img/dani.jpg';
import tiven from '../img/tiven.jpg';

export class PersonasData {
  static getPersonas() {
    return [
      {
        id: 'L00418754',
        nombre: 'Daniela Tituaña',
        foto: daniFoto,
        email: 'dltituana1@espe.edu.ec',
        github: 'https://github.com/DanielaLTM2206',
        descripcion: 'Blockchain Developer especializada en Smart Contracts y DeFi protocols.',
      },
      {
        id: 'L00400869',
        nombre: 'Gustavo Molina',
        foto: tiven,
        email: 'gsmolina2@espe.edu.ec',
        github: 'https://github.com/gsMolina02',
        descripcion: 'Cryptography Engineer experto en algoritmos de consenso y mining.',
      },
    ];
  }

  static getPersonaById(id) {
    return this.getPersonas().find(persona => persona.id === id);
  }

  static getPersonaByNombre(nombre) {
    return this.getPersonas().find(persona => persona.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }

  static getTotalPersonas() {
    return this.getPersonas().length;
  }
}
