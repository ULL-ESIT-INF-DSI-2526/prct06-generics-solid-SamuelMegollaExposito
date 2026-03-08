import { describe, test, expect, beforeEach } from 'vitest';
import { JediMasterCollection } from '../../src/ejercicio-1/jediMasterCollection';
import { JediMaster } from '../../src/ejercicio-1/jediMaster';


describe('Ejercicio 1 - Academia Jedi (Pruebas de Colecciones)', () => {

  // --- Test de Robustez General ---
  describe('Robustez del Sistema', () => {
    test('La inmutabilidad: getAll() no debe permitir modificar el array interno por referencia', () => {
      const jediRepo = new JediMasterCollection();
      const yoda: JediMaster = { id: '1', name: 'Yoda', affiliation: 'República', powerLevel: 100, formationYear: 0, originPlanet: 'X' };
      jediRepo.addItem(yoda);
      
      const items = jediRepo.getAll();
      items.push({} as any); // Intento de "hackear" el array
      
      expect(jediRepo.getAll()).toHaveLength(1); // El original sigue intacto
    });
  });
});