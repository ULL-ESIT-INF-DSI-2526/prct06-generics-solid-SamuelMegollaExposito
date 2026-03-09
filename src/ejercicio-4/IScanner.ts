/**
 * Interfaz para dispositivos con capacidad de escaneo.
 */
export interface IScanner {
  /**
   * Escanea un documento.
   * @param doc Identificador o descripción del documento.
   * @returns El contenido escaneado como string.
   */
  scan(doc: string): string;
}