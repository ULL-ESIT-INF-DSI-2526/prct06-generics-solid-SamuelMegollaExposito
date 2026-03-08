import { describe, test, expect, beforeEach } from 'vitest';
import { ChefRepository } from '../../src/ejercicio-2/ChefRepository';
import { RecipeRepository } from '../../src/ejercicio-2/RecipeRepository';
import { StepRepository } from '../../src/ejercicio-2/StepRepository';
import { Chef } from '../../src/ejercicio-2/Chef';
import { Recetario } from '../../src/ejercicio-2/Recetario';
import { Receta } from '../../src/ejercicio-2/Receta';
import { Paso } from '../../src/ejercicio-2/Paso';

describe('Pruebas de Repositorios', () => {
  let chefRepo: ChefRepository;
  let recipeRepo: RecipeRepository;
  let stepRepo: StepRepository;

  beforeEach(() => {
    chefRepo = new ChefRepository();
    recipeRepo = new RecipeRepository();
    stepRepo = new StepRepository();
  });

  test('ChefRepository: Debe buscar por nombre y seguidores', () => {
    const chef = new Chef('C1', 'Gordon Ramsay', 5000000, new Recetario('R1'));
    chefRepo.add(chef);
    
    expect(chefRepo.searchByName('Gordon')).toHaveLength(1);
    expect(chefRepo.searchByMinFollowers(6000000)).toHaveLength(0);
    expect(chefRepo.searchByMinFollowers(1000)).toHaveLength(1);
  });

  test('RecipeRepository: Debe buscar por rango de años', () => {
    const r1 = new Receta('R1', 'Antigua', 1990, [new Paso('1', 'p', 1, [], false)]);
    const r2 = new Receta('R2', 'Nueva', 2020, [new Paso('1', 'p', 1, [], false)]);
    recipeRepo.add(r1);
    recipeRepo.add(r2);

    const result = recipeRepo.searchByYearRange(2000, 2025);
    expect(result).toHaveLength(1);
    expect(result[0].nombre).toBe('Nueva');
  });

  test('StepRepository: Debe buscar por etiquetas y opcionalidad', () => {
    const p1 = new Paso('P1', 'Sal', 5, ['condimento', 'basico'], false);
    const p2 = new Paso('P2', 'Pimienta', 5, ['condimento'], true);
    stepRepo.add(p1);
    stepRepo.add(p2);

    expect(stepRepo.searchByTags(['condimento', 'basico'])).toHaveLength(1);
    expect(stepRepo.searchByOptional(true)).toEqual([p2]);
  });
});