import { IShape } from "./IShape";

/**
 * Clase que representa un círculo.
 */
export class Circle implements IShape {
  /**
   * Crea una instancia de Circle.
   * @param _radius Radio del círculo.
   */
  constructor(private _radius: number) {}

  /**
   * Obtiene el radio del círculo.
   */
  get radius(): number { return this._radius; }

  /**
   * Calcula el área del círculo (PI * r^2).
   * @returns Área del círculo.
   */
  getArea(): number {
    return Math.PI * this._radius * this._radius;
  }
}