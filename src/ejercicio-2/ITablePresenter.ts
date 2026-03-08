/**
 * Interfaz para desacoplar la presentación de datos (DIP).
 */
export interface ITablePresenter<T> {
  render(data: T[]): void;
}