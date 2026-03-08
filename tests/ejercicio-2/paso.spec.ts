import { describe, test, expect } from 'vitest';
import { Paso } from '../../src/ejercicio-2/Paso';
import { PasoConHerramienta } from '../../src/ejercicio-2/PasoConHerramienta';

describe('Pruebas de la clase Paso y extensiones', () => {
  test('Debe crear un paso correctamente y permitir completarlo', () => {
    const paso = new Paso('1', 'Cortar cebolla', 60, ['vegetales'], false);
    expect(paso.vecesCompletado).toBe(0);
    paso.completarPaso();
    expect(paso.vecesCompletado).toBe(1);
  });

  test('Debe lanzar error si el nombre está vacío en validate()', () => {
    const paso = new Paso('1', '', 60, [], false);
    expect(() => paso.validate()).toThrow("Nombre vacío");
  });

  test('Debe lanzar error si la duración es negativa en validate()', () => {
    const paso = new Paso('1', 'Error', -10, [], false);
    expect(() => paso.validate()).toThrow("Duración inválida");
  });

  test('PasoConHerramienta debe mantener las propiedades base y añadir la herramienta', () => {
    const pasoTool = new PasoConHerramienta('2', 'Batir', 120, [], false, 'Batidora');
    expect(pasoTool.herramienta).toBe('Batidora');
    expect(pasoTool.nombre).toBe('Batir');
  });
});