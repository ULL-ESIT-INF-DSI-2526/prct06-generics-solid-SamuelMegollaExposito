import { describe, test, expect, vi } from 'vitest';
import { ConsoleTableRenderer } from '../../src/ejercicio-2/ConsoleTableRenderer';

describe('Pruebas de ConsoleTableRenderer', () => {
  test('Debe llamar a console.table cuando hay datos', () => {
    const spy = vi.spyOn(console, 'table');
    const renderer = new ConsoleTableRenderer<any>();
    const datos = [{ id: 1, nombre: 'Prueba' }];
    
    renderer.render(datos);
    
    expect(spy).toHaveBeenCalledWith(datos);
    spy.mockRestore();
  });

  test('Debe mostrar mensaje alternativo si el array está vacío', () => {
    const spy = vi.spyOn(console, 'log');
    const renderer = new ConsoleTableRenderer<any>();
    
    renderer.render([]);
    
    expect(spy).toHaveBeenCalledWith("No se encontraron resultados para mostrar.");
    spy.mockRestore();
  });
});