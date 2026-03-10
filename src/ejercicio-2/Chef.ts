import { IRecetario } from "./interface/IRecetario";
import { IChef } from "./interface/IChef";

export class Chef implements IChef {
  constructor(
    private _id: string,
    private _nombre: string,
    private _seguidores: number,
    private _recetario: IRecetario
  ) {}

  get id(): string { return this._id; }
  get nombre(): string { return this._nombre; }
  get seguidores(): number { return this._seguidores; }
  get recetario(): IRecetario { return this._recetario; }

  validate(): void {
    if (this.seguidores < 0) throw new Error("Seguidores negativos");
  }
}