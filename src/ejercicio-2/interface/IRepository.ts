/**
 * Interfaz genérica para el almacenamiento de entidades.
 * @template T Tipo de la entidad.
 * @template K Tipo de la clave identificadora.
 */
export interface IRepository<T, K> {
  add(item: T): void;
  remove(id: K): void;
  getById(id: K): T | undefined;
  getAll(): T[];
}