import { describe, test, expect, beforeEach } from 'vitest';
import { StarshipCollection } from '../../src/ejercicio-1/starshipCollection';
import { Starship } from '../../src/ejercicio-1/starship';


  
  // --- Tests para StarshipCollection ---
  describe('StarshipCollection', () => {
    let shipRepo: StarshipCollection;
    const xWing: Starship = {
      id: 'S01', name: 'X-Wing', affiliation: 'República', 
      shipClass: 'Caza', constructionYear: 0, manufacturerPlanet: 'Incom'
    };

    beforeEach(() => {
      shipRepo = new StarshipCollection();
      shipRepo.addItem(xWing);
    });

    test('Debe buscar por clase de nave (String)', () => {
      const result = shipRepo.searchByPowerOrClass('Caza');
      expect(result[0].name).toBe('X-Wing');
    });

    test('Debe buscar por año de construcción', () => {
      expect(shipRepo.searchByYear(0)).toHaveLength(1);
      expect(shipRepo.searchByYear(1999)).toHaveLength(0);
    });
  });