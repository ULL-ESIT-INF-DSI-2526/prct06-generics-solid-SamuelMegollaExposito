import { BaseRepository } from "./BaseRepository";
import { IPaso } from "./interface/IPaso";
import { ISearchByName, ISearchByTags, ISearchByOptionality } from "./interface/ISearchable";

export class StepRepository extends BaseRepository<IPaso> implements ISearchByName<IPaso>, ISearchByTags<IPaso>, ISearchByOptionality<IPaso> {
  searchByName(name: string): IPaso[] {
    return this.items.filter(p => p.nombre.toLowerCase().includes(name.toLowerCase()));
  }
  searchByTags(tags: string[]): IPaso[] {
    return this.items.filter(p => tags.every(t => p.etiquetas.includes(t)));
  }
  searchByOptional(isOptional: boolean): IPaso[] {
    return this.items.filter(p => p.opcional === isOptional);
  }
}