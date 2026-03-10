import { IReceta } from "./interface/IReceta";
import { IRecetario } from "./interface/IRecetario";

export class Recetario implements IRecetario {
  constructor(private _id: string, private _recetas: IReceta[] = []) {}
  get id(): string { return this._id; }
  get recetas(): IReceta[] { return [...this._recetas]; }
}