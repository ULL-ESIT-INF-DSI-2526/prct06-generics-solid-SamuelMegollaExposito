import { GalacticRegistry } from "./interfaces";
import { Affiliation } from "./types";

/**
 * Clase abstracta que proporciona una implementación base para las colecciones galácticas.
 * T debe tener al menos las propiedades básicas para permitir búsquedas comunes.
 */
export abstract class BasicGalacticCollection<T extends { id: string; name: string; affiliation: Affiliation }> implements GalacticRegistry<T> {
  
  protected items: T[] = [];

  /**
   * Añade un nuevo elemento a la colección
   * @param item Elemento a añadir
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Elimina un elemento por su ID
   * @param id ID del elemento
   */
  removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  /**
   * Obtiene todos los elementos
   */
  getAll(): T[] {
    return [...this.items];
  }

  /**
   * Implementación común de búsqueda por nombre
   */
  searchByName(name: string): T[] {
    return this.items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  }

  /**
   * Implementación común de búsqueda por afiliación
   */
  searchByAffiliation(affiliation: Affiliation): T[] {
    return this.items.filter(item => item.affiliation === affiliation);
  }

  // Métodos que deben ser implementados por las subclases debido a la naturaleza 
  // específica de sus propiedades de poder, año y planeta.
  abstract searchByPowerOrClass(criterion: string | number): T[];
  abstract searchByYear(year: number): T[];
  abstract searchByPlanet(planet: string): T[];
}