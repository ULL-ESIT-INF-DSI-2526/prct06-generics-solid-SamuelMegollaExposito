/**
 * Interfaz para dispositivos con capacidad de envío de fax.
 */
export interface IFax {
  /**
   * Envía un documento por fax.
   * @param doc Contenido a enviar.
   */
  fax(doc: string): void;
}