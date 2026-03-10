import { IPaso } from "./interface/IPaso";

/**
 * Clase que representa un paso básico en una receta.
 */
export class Paso implements IPaso {
  private _vecesCompletado: number = 0;

  constructor(
    private _id: string,
    private _nombre: string,
    private _duracionSegundos: number,
    private _etiquetas: string[],
    private _opcional: boolean
  ) {}

  get id(): string { return this._id; }
  get nombre(): string { return this._nombre; }
  get duracionSegundos(): number { return this._duracionSegundos; }
  get etiquetas(): string[] { return [...this._etiquetas]; }
  get opcional(): boolean { return this._opcional; }
  get vecesCompletado(): number { return this._vecesCompletado; }

  completarPaso(): void { this._vecesCompletado++; }

  validate(): void {
    if (!this.nombre || this.nombre.trim().length === 0) throw new Error("Nombre vacío");
    if (this.duracionSegundos <= 0) throw new Error("Duración inválida");
  }
}