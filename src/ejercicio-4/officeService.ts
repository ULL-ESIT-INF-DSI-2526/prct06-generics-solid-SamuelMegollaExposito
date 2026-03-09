import { IFax } from "./IFax";
import { IPrinter } from "./IPrinter";

/**
 * Servicio que gestiona operaciones de oficina.
 * Los métodos dependen de la interfaz mínima necesaria.
 */
export class OfficeService {
  /**
   * Envía un fax usando cualquier dispositivo que soporte IFax.
   * @param machine Dispositivo con capacidad de fax.
   * @param doc Documento a enviar.
   */
  sendFax(machine: IFax, doc: string): void {
    machine.fax(doc);
  }

  /**
   * Realiza una impresión usando cualquier dispositivo que soporte IPrinter.
   * @param machine Dispositivo con capacidad de impresión.
   * @param doc Documento a imprimir.
   */
  performPrint(machine: IPrinter, doc: string): void {
    machine.print(doc);
  }
}