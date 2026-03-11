/**
 * Interfaz genérica para elementos reproducibles.
 * @template T Tipo de los datos de información del elemento.
 */
export interface IReproducible<T> {
  /**
   * Retorna la información del elemento.
   * @returns Datos de tipo T.
   */
  data(): T;
  /**
   * Retorna la duración en segundos.
   * @returns Segundos.
   */
  duration(): number;
}