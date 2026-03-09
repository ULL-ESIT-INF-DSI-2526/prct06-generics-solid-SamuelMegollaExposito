import { IPrinter } from "./IPrinter";

/**
 * Clase que representa una impresora básica.
 * Solo implementa la capacidad de impresión.
 */
export class BasicPrinter implements IPrinter {
  /**
   * Imprime el documento por consola.
   * @param doc Documento a imprimir.
   */
  print(doc: string): void {
    console.log("Printing:", doc);
  }
}