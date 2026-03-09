import { IShape } from "./IShape";

/**
 * Clase encargada de calcular el área de diversas formas.
 * Cumple con el principio Open/Closed al no requerir modificaciones
 * para añadir nuevas figuras.
 */
export class AreaCalculator {
  /**
   * Calcula el área de cualquier objeto que implemente IShape.
   * @param s Una instancia que cumpla con la interfaz IShape.
   * @returns El área de la figura.
   */
  area(s: IShape): number {
    return s.getArea();
  }
}