import { IReceta } from "./IReceta";
import { IPaso } from "./IPaso";

/**
 * Clase que representa una receta.
 */
export class Receta implements IReceta {
  constructor(
    private _id: string,
    private _nombre: string,
    private _anioPublicacion: number,
    private _pasos: IPaso[] = []
  ) {}

  get id(): string { return this._id; }
  get nombre(): string { return this._nombre; }
  get anioPublicacion(): number { return this._anioPublicacion; }
  get pasos(): IPaso[] { return [...this._pasos]; }

  validate(): void {
    if (!this.nombre) throw new Error("Nombre requerido");
    if (this.pasos.length === 0) throw new Error("La receta debe tener pasos");
  }
}