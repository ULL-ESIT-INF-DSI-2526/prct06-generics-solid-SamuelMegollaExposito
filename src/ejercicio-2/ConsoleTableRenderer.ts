import { ITablePresenter } from "./ITablePresenter";

/**
 * Implementación de presentación por consola.
 */
export class ConsoleTableRenderer<T> implements ITablePresenter<T> {
  /**
   * Muestra los datos usando el método nativo console.table.
   */
  render(data: T[]): void {
    if (data.length === 0) {
      console.log("No se encontraron resultados para mostrar.");
    } else {
      console.table(data);
    }
  }
}