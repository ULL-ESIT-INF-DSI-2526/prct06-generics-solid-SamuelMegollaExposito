import { IRepository } from "./interface/IRepository";

/**
 * Implementación base genérica para repositorios.
 */
export abstract class BaseRepository<T extends { id: string }> implements IRepository<T, string> {
  protected items: T[] = [];

  add(item: T): void { this.items.push(item); }
  remove(id: string): void { this.items = this.items.filter(i => i.id !== id); }
  getById(id: string): T | undefined { return this.items.find(i => i.id === id); }
  getAll(): T[] { return [...this.items]; }
}