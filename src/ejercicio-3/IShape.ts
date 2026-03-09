/**
 * Interfaz que define el contrato para cualquier forma geométrica.
 */
export interface IShape {
  /**
   * Calcula el área de la forma geométrica.
   * @returns El área calculada como un número.
   */
  getArea(): number;
}