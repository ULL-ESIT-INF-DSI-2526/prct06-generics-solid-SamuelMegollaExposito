import { IReceta } from "./IReceta";
import { IRecetario } from "./IRecetario";

export class Recetario implements IRecetario {
  constructor(private _id: string, private _recetas: IReceta[] = []) {}
  get id(): string { return this._id; }
  get recetas(): IReceta[] { return [...this._recetas]; }
}