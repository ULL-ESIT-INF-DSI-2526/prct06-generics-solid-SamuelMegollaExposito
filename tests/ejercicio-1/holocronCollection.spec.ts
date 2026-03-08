import { describe, test, expect, beforeEach } from 'vitest';
import { HolocronCollection } from '../../src/ejercicio-1/holocronCollection';
import { Holocron } from '../../src/ejercicio-1/holocron';

  // --- Tests para HolocronCollection ---
  describe('HolocronCollection', () => {
    let holocronRepo: HolocronCollection;
    const sithHolocron: Holocron = {
      id: 'H01', name: 'Holocron de Bane', affiliation: 'Sith', 
      knowledgeLevel: 80, creationYear: -1000, discoveryPlanet: 'Korriban'
    };

    beforeEach(() => {
      holocronRepo = new HolocronCollection();
      holocronRepo.addItem(sithHolocron);
    });

    test('Debe buscar por nivel de conocimiento (Number)', () => {
      expect(holocronRepo.searchByPowerOrClass(50)).toHaveLength(1);
      expect(holocronRepo.searchByPowerOrClass(90)).toHaveLength(0);
    });

    test('Debe buscar por planeta de descubrimiento', () => {
      const result = holocronRepo.searchByPlanet('Korriban');
      expect(result[0].name).toBe('Holocron de Bane');
    });
  });
