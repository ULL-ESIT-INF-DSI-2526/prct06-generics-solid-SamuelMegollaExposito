import { IPaso } from "./IPaso";

/**
 * Interfaz para la entidad Receta.
 */
export interface IReceta {
  readonly id: string;
  readonly nombre: string;
  readonly anioPublicacion: number;
  readonly pasos: IPaso[];
  validate(): void;
}