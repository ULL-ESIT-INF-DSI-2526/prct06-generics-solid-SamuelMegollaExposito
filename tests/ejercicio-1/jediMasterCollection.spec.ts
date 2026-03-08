import { describe, test, expect, beforeEach } from 'vitest';
import { JediMasterCollection } from '../../src/ejercicio-1/jediMasterCollection';
import { JediMaster } from '../../src/ejercicio-1/jediMaster';


describe('Ejercicio 1 - Academia Jedi (Pruebas de Colecciones)', () => {
  
  // --- Tests para JediMasterCollection ---
  describe('JediMasterCollection', () => {
    let jediRepo: JediMasterCollection;
    const yoda: JediMaster = {
      id: 'J01', name: 'Yoda', affiliation: 'República', 
      powerLevel: 100, formationYear: -800, originPlanet: 'Desconocido'
    };
    const vader: JediMaster = {
      id: 'J02', name: 'Darth Vader', affiliation: 'Imperio', 
      powerLevel: 95, formationYear: 19, originPlanet: 'Tatooine'
    };

    beforeEach(() => {
      jediRepo = new JediMasterCollection();
    });

    test('Debe permitir añadir y obtener todos los Maestros Jedi', () => {
      jediRepo.addItem(yoda);
      expect(jediRepo.getAll()).toHaveLength(1);
      expect(jediRepo.getAll()[0]).toEqual(yoda);
    });

    test('Debe eliminar un Jedi por ID correctamente', () => {
      jediRepo.addItem(yoda);
      jediRepo.removeItem('J01');
      expect(jediRepo.getAll()).toHaveLength(0);
    });

    test('No debe fallar al intentar eliminar un ID que no existe', () => {
      jediRepo.addItem(yoda);
      jediRepo.removeItem('ID_INEXISTENTE');
      expect(jediRepo.getAll()).toHaveLength(1);
    });

    test('Debe buscar por nombre (case-insensitive y parcial)', () => {
      jediRepo.addItem(yoda);
      jediRepo.addItem(vader);
      const result = jediRepo.searchByName('yo');
      expect(result).toContain(yoda);
      expect(result).not.toContain(vader);
    });

    test('Debe buscar por afiliación', () => {
      jediRepo.addItem(yoda);
      jediRepo.addItem(vader);
      expect(jediRepo.searchByAffiliation('Imperio')).toEqual([vader]);
    });

    test('Debe buscar por nivel de poder (mínimo)', () => {
      jediRepo.addItem(yoda);
      jediRepo.addItem(vader);
      // Buscamos poder >= 98
      const result = jediRepo.searchByPowerOrClass(98);
      expect(result).toEqual([yoda]);
    });

    test('Debe buscar por planeta de origen', () => {
      jediRepo.addItem(vader);
      expect(jediRepo.searchByPlanet('Tatooine')).toEqual([vader]);
    });

    test('Debe devolver un array vacío si la búsqueda no encuentra nada', () => {
      expect(jediRepo.searchByName('Luke')).toEqual([]);
    });
  });
});