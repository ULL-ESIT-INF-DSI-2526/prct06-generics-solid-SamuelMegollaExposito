import { IRecetario } from "./IRecetario";

export interface IChef {
  readonly id: string;
  readonly nombre: string;
  readonly seguidores: number;
  readonly recetario: IRecetario;
  validate(): void;
}