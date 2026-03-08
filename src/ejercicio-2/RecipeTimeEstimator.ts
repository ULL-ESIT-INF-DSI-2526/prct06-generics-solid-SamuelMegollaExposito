import { IReceta } from "./IReceta";

/**
 * Servicio encargado de la lógica de cálculo de tiempos de recetas.
 */
export class RecipeTimeEstimator {
  /**
   * Cuenta los pasos de una receta.
   */
  countSteps(recipe: IReceta): number {
    return recipe.pasos.length;
  }

  /**
   * Estima el tiempo considerando pasos opcionales.
   */
  estimateTime(recipe: IReceta): { min: number; max: number } {
    let min = 0;
    let max = 0;
    recipe.pasos.forEach(paso => {
      if (paso.opcional) {
        max += paso.duracionSegundos;
      } else {
        min += paso.duracionSegundos;
        max += paso.duracionSegundos;
      }
    });
    return { min, max };
  }
}