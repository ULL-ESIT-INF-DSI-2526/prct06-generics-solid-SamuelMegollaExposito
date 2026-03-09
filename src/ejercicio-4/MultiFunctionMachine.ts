import { IPrinter } from "./IPrinter";
import { IScanner } from "./IScanner";
import { IFax } from "./IFax";

/**
 * Máquina multifunción que soporta impresión, escaneo y fax.
 */
export class MultiFunctionMachine implements IPrinter, IScanner, IFax {
  print(doc: string): void {
    console.log("MultiFunction Printing:", doc);
  }

  scan(doc: string): string {
    return `Scanned content of ${doc}`;
  }

  fax(doc: string): void {
    console.log("MultiFunction Faxing:", doc);
  }
}