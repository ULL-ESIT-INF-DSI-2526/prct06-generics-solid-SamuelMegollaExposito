import { IReproducible } from "./IReproducible";
import { IPodcastData } from "./IPodcastData";

/**
 * Tipo que une las posibles formas de elementos reproducibles admitidos.
 */
export type ReproducibleElement = IReproducible<string> | IReproducible<IPodcastData>;

/**
 * Clase genérica que gestiona una colección de elementos reproducibles.
 * @template T Restringido a elementos que implementen IReproducible con los tipos soportados.
 */
export class History<T extends ReproducibleElement> {
  private _elementos: T[] = [];

  add(item: T): void {
    this._elementos.push(item);
  }

  remove(index: number): void {
    if (index < 0 || index >= this._elementos.length) {
      throw new Error("Índice inválido");
    }
    this._elementos.splice(index, 1);
  }

  get(index: number): T {
    return this._elementos[index];
  }

  size(): number {
    return this._elementos.length;
  }

  /**
   * Filtra elementos y devuelve un nuevo historial.
   */
  filter(predicate: (item: T) => boolean): History<T> {
    const nuevoHistorial = new History<T>();
    this._elementos.filter(predicate).forEach(el => nuevoHistorial.add(el));
    return nuevoHistorial;
  }

  /**
   * Suma de duraciones.
   */
  duration(): number {
    return this._elementos.reduce((acc, el) => acc + el.duration(), 0);
  }
}