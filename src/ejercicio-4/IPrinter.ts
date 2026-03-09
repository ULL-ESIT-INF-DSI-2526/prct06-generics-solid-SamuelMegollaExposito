/**
 * Interfaz para dispositivos con capacidad de impresión.
 */
export interface IPrinter {
  /**
   * Imprime un documento.
   * @param doc Contenido del documento a imprimir.
   */
  print(doc: string): void;
}