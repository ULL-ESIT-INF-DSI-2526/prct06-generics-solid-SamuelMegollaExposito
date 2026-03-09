import { describe, test, expect } from 'vitest';
import { Circle } from '../../src/ejercicio-3/circle';
import { Rectangle } from '../../src/ejercicio-3/rectangle';
import { Triangle } from '../../src/ejercicio-3/triangle';

describe('Pruebas unitarias de figuras geométricas', () => {
  test('Circle debe calcular su área correctamente', () => {
    const circle = new Circle(5);
    expect(circle.getArea()).toBeCloseTo(78.5398, 4);
  });

  test('Rectangle debe calcular su área correctamente', () => {
    const rect = new Rectangle(10, 5);
    expect(rect.getArea()).toBe(50);
  });

  test('Triangle debe calcular su área correctamente', () => {
    const tri = new Triangle(10, 5);
    expect(tri.getArea()).toBe(25);
  });
});