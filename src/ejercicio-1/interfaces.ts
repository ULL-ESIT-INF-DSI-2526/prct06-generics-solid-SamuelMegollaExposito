import { Affiliation } from "./types";

export interface SearchableByName<T> {
  searchByName(name: string): T[];
}

export interface SearchableByAffiliation<T> {
  searchByAffiliation(affiliation: Affiliation): T[];
}

export interface SearchableByPower<T> {
  searchByPowerOrClass(criterion: string | number): T[];
}

export interface SearchableByYear<T> {
  searchByYear(year: number): T[];
}

export interface SearchableByPlanet<T> {
  searchByPlanet(planet: string): T[];
}

/**
 * Interfaz genérica que agrupa todas las capacidades de búsqueda
 */
export interface GalacticRegistry<T> extends 
  SearchableByName<T>, 
  SearchableByAffiliation<T>, 
  SearchableByPower<T>, 
  SearchableByYear<T>, 
  SearchableByPlanet<T> {
    addItem(item: T): void;
    removeItem(id: string): void;
    getAll(): T[];
}