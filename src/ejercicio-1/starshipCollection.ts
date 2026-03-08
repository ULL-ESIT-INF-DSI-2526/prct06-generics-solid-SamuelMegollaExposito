import { BasicGalacticCollection } from "./basicGalacticCollection";
import { Starship } from "./starship";

/**
 * Clase que gestiona una colección de naves espaciales (Starships).
 * Extiende la funcionalidad básica de la colección galáctica.
 */
export class StarshipCollection extends BasicGalacticCollection<Starship> {
  
  /**
   * Busca naves por su clase (ej. "Caza", "Destructor", "Carguero").
   * @param criterion El nombre de la clase de nave a buscar.
   * @returns Array de naves que coinciden con la clase.
   */
  searchByPowerOrClass(criterion: string): Starship[] {
    return this.items.filter(ship => 
      ship.shipClass.toLowerCase() === criterion.toLowerCase()
    );
  }

  /**
   * Busca naves por su año de construcción.
   * @param year Año de fabricación de la nave.
   * @returns Array de naves construidas en ese año.
   */
  searchByYear(year: number): Starship[] {
    return this.items.filter(ship => ship.constructionYear === year);
  }

  /**
   * Busca naves por su planeta de origen/fabricación.
   * @param planet Nombre del planeta donde se fabricó la nave.
   * @returns Array de naves vinculadas a dicho planeta.
   */
  searchByPlanet(planet: string): Starship[] {
    return this.items.filter(ship => 
      ship.manufacturerPlanet.toLowerCase() === planet.toLowerCase()
    );
  }
}