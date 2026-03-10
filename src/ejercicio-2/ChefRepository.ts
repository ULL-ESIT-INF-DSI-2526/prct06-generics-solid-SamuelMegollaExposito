import { BaseRepository } from "./BaseRepository";
import { IChef } from "./interface/IChef";
import { ISearchByName, ISearchByFollowers } from "./interface/ISearchable";

export class ChefRepository extends BaseRepository<IChef> implements ISearchByName<IChef>, ISearchByFollowers<IChef> {
  searchByName(name: string): IChef[] {
    return this.items.filter(c => c.nombre.toLowerCase().includes(name.toLowerCase()));
  }
  searchByMinFollowers(min: number): IChef[] {
    return this.items.filter(c => c.seguidores >= min);
  }
}