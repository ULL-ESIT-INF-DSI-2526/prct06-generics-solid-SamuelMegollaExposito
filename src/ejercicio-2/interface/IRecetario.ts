import { IReceta } from "./IReceta";

export interface IRecetario {
  readonly id: string;
  readonly recetas: IReceta[];
}