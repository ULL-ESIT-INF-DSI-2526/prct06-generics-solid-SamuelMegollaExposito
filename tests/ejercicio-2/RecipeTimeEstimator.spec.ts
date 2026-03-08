import { describe, test, expect } from 'vitest';
import { RecipeTimeEstimator } from '../../src/ejercicio-2/RecipeTimeEstimator';
import { Receta } from '../../src/ejercicio-2/Receta';
import { Paso } from '../../src/ejercicio-2/Paso';

describe('Pruebas de RecipeTimeEstimator', () => {
  const estimator = new RecipeTimeEstimator();

  test('Debe calcular tiempo exacto si no hay pasos opcionales', () => {
    const receta = new Receta('1', 'Test', 2024, [
      new Paso('S1', 'P1', 100, [], false),
      new Paso('S2', 'P2', 50, [], false)
    ]);
    const tiempo = estimator.estimateTime(receta);
    expect(tiempo.min).toBe(150);
    expect(tiempo.max).toBe(150);
  });

  test('Debe calcular rango min/max si hay pasos opcionales', () => {
    const receta = new Receta('1', 'Test', 2024, [
      new Paso('S1', 'Obligatorio', 100, [], false),
      new Paso('S2', 'Opcional', 50, [], true)
    ]);
    const tiempo = estimator.estimateTime(receta);
    expect(tiempo.min).toBe(100);
    expect(tiempo.max).toBe(150);
  });

  test('Debe contar pasos correctamente', () => {
    const receta = new Receta('1', 'Test', 2024, [
      new Paso('1', 'p', 1, [], false),
      new Paso('2', 'p', 1, [], false)
    ]);
    expect(estimator.countSteps(receta)).toBe(2);
  });
});