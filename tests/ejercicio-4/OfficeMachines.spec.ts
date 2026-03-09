import { describe, test, expect, vi } from 'vitest';
import { BasicPrinter } from '../../src/ejercicio-4/basicPrinter';
import { MultiFunctionMachine } from '../../src/ejercicio-4/MultiFunctionMachine';
import { OfficeService } from '../../src/ejercicio-4/officeService';

describe('Pruebas de Material de Oficina (ISP / LSP)', () => {
  const service = new OfficeService();

  test('BasicPrinter solo debe imprimir y no tener métodos de fax/scan', () => {
    const printer = new BasicPrinter();
    const spy = vi.spyOn(console, 'log');
    
    printer.print("Hola");
    
    expect(spy).toHaveBeenCalledWith("Printing:", "Hola");
    // TypeScript evitaría compilar printer.fax() o printer.scan()
    expect((printer as any).fax).toBeUndefined();
    spy.mockRestore();
  });

  test('MultiFunctionMachine debe soportar todas las operaciones', () => {
    const mfm = new MultiFunctionMachine();
    expect(mfm.scan("Doc1")).toContain("Scanned content");
    
    const spy = vi.spyOn(console, 'log');
    mfm.fax("Doc1");
    expect(spy).toHaveBeenCalledWith("MultiFunction Faxing:", "Doc1");
    spy.mockRestore();
  });

  test('OfficeService.sendFax solo debe aceptar máquinas con capacidad de Fax', () => {
    const mfm = new MultiFunctionMachine();
    const spy = vi.spyOn(console, 'log');
    
    service.sendFax(mfm, "Documento de prueba");
    
    expect(spy).toHaveBeenCalled();
    // service.sendFax(new BasicPrinter(), "...") daría error de tipos en TS
    spy.mockRestore();
  });
});