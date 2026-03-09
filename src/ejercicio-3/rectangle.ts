import { IShape } from "./IShape";

/**
 * Clase que representa un rectángulo.
 */
export class Rectangle implements IShape {
  /**
   * Crea una instancia de Rectangle.
   * @param _width Ancho del rectángulo.
   * @param _height Alto del rectángulo.
   */
  constructor(private _width: number, private _height: number) {}

  get width(): number { return this._width; }
  get height(): number { return this._height; }

  /**
   * Calcula el área del rectángulo (base * altura).
   * @returns Área del rectángulo.
   */
  getArea(): number {
    return this._width * this._height;
  }
}