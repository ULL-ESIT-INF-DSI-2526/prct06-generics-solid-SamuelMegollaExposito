import { BaseRepository } from "./BaseRepository";
import { IReceta } from "./interface/IReceta";
import { ISearchByName, ISearchByYearRange } from "./interface/ISearchable";

export class RecipeRepository extends BaseRepository<IReceta> implements ISearchByName<IReceta>, ISearchByYearRange<IReceta> {
  searchByName(name: string): IReceta[] {
    return this.items.filter(r => r.nombre.toLowerCase().includes(name.toLowerCase()));
  }
  searchByYearRange(start: number, end: number): IReceta[] {
    return this.items.filter(r => r.anioPublicacion >= start && r.anioPublicacion <= end);
  }
}