import { IShape } from "./IShape";

/**
 * Clase que representa un triángulo.
 */
export class Triangle implements IShape {
  /**
   * Crea una instancia de Triangle.
   * @param _base Base del triángulo.
   * @param _height Altura del triángulo.
   */
  constructor(private _base: number, private _height: number) {}

  get base(): number { return this._base; }
  get height(): number { return this._height; }

  /**
   * Calcula el área del triángulo (base * altura / 2).
   * @returns Área del triángulo.
   */
  getArea(): number {
    return (this._base * this._height) / 2;
  }
}