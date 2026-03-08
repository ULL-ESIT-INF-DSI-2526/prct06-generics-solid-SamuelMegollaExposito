/**
 * Interfaz que define la estructura básica de un paso de receta.
 */
export interface IPaso {
  readonly id: string;
  readonly nombre: string;
  readonly duracionSegundos: number;
  readonly etiquetas: string[];
  readonly opcional: boolean;
  readonly vecesCompletado: number;
  completarPaso(): void;
  validate(): void;
}