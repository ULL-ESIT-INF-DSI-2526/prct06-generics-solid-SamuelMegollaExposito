import { describe, test, expect } from 'vitest';
import { AreaCalculator } from '../../src/ejercicio-3/areaCalculator';
import { Circle } from '../../src/ejercicio-3/circle';
import { Rectangle } from '../../src/ejercicio-3/rectangle';
import { IShape } from '../../src/ejercicio-3/IShape';

describe('Pruebas de AreaCalculator (SOLID)', () => {
  const calculator = new AreaCalculator();

  test('Debe calcular el área de diferentes formas mediante polimorfismo', () => {
    const shapes: IShape[] = [
      new Circle(1),     // Área: PI
      new Rectangle(2, 2) // Área: 4
    ];

    expect(calculator.area(shapes[0])).toBe(Math.PI);
    expect(calculator.area(shapes[1])).toBe(4);
  });

  test('Debe permitir nuevas formas sin modificar la calculadora (Mocking a new shape)', () => {
    // Simulamos una nueva forma (ej. Cuadrado) que no existía originalmente
    const square: IShape = {
      getArea: () => 16
    };
    
    // La calculadora funciona con ella sin cambios en su código
    expect(calculator.area(square)).toBe(16);
  });
});