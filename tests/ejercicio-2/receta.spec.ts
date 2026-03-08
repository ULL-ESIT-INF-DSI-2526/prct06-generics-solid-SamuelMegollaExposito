import { describe, test, expect } from 'vitest';
import { Receta } from '../../src/ejercicio-2/Receta';
import { Paso } from '../../src/ejercicio-2/Paso';

describe('Pruebas de la clase Receta', () => {
  test('Debe validar correctamente una receta con pasos', () => {
    const paso = new Paso('1', 'Paso 1', 10, [], false);
    const receta = new Receta('R1', 'Tortilla', 2023, [paso]);
    expect(() => receta.validate()).not.toThrow();
  });

  test('Debe lanzar error si la receta no tiene pasos', () => {
    const receta = new Receta('R1', 'Vacía', 2023, []);
    expect(() => receta.validate()).toThrow("La receta debe tener pasos");
  });
});