/**
 * Interfaces segregadas para soportar distintos tipos de búsqueda (ISP).
 */

export interface ISearchByName<T> {
  searchByName(name: string): T[];
}

export interface ISearchByTags<T> {
  searchByTags(tags: string[]): T[];
}

export interface ISearchByYearRange<T> {
  searchByYearRange(startYear: number, endYear: number): T[];
}

export interface ISearchByFollowers<T> {
  searchByMinFollowers(minFollowers: number): T[];
}

export interface ISearchByOptionality<T> {
  searchByOptional(isOptional: boolean): T[];
}