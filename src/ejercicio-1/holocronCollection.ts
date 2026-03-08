import { BasicGalacticCollection } from "./basicGalacticCollection";
import { Holocron } from "./holocron";

/**
 * Clase que gestiona una colección de Holocrones (artefactos de conocimiento).
 * Extiende la funcionalidad básica de la colección galáctica.
 */
export class HolocronCollection extends BasicGalacticCollection<Holocron> {
  
  /**
   * Busca holocrones por su nivel de conocimiento.
   * @param criterion Nivel mínimo de conocimiento requerido (número).
   * @returns Array de holocrones que igualan o superan dicho nivel.
   */
  searchByPowerOrClass(criterion: number): Holocron[] {
    return this.items.filter(holocron => holocron.knowledgeLevel >= criterion);
  }

  /**
   * Busca holocrones por su año de creación.
   * @param year Año en el que el holocron fue creado.
   * @returns Array de holocrones creados en ese año.
   */
  searchByYear(year: number): Holocron[] {
    return this.items.filter(holocron => holocron.creationYear === year);
  }

  /**
   * Busca holocrones por el planeta donde fueron descubiertos.
   * @param planet Nombre del planeta de descubrimiento.
   * @returns Array de holocrones encontrados en ese planeta.
   */
  searchByPlanet(planet: string): Holocron[] {
    return this.items.filter(holocron => 
      holocron.discoveryPlanet.toLowerCase() === planet.toLowerCase()
    );
  }
}