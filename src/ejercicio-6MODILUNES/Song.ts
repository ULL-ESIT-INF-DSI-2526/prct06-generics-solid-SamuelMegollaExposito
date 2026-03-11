import { IReproducible } from "./IReproducible";

/**
 * Clase que representa una cancion
 */
export class Song implements IReproducible<string> {
  /**
   * @param _titulo Título de la canción.
   * @param _artista Artista.
   * @param _duracionSegundos Duración.
   * @param _genero Género.
   * @param _album Álbum.
   */
  constructor(
    private readonly _titulo: string,
    private readonly _artista: string,
    private readonly _duracionSegundos: number,
    private readonly _genero: string,
    private readonly _album: string
  ) {
    if (_duracionSegundos <= 0) throw new Error("Duración debe ser mayor a 0");
  }

  get titulo(): string { return this._titulo; }
  get artista(): string { return this._artista; }
  get genero(): string { return this._genero; }
  get album(): string { return this._album; }

  /**
   * Retorna título y artista.
   */
  data(): string {
    return `${this._titulo} - ${this._artista}`;
  }

  /**
   * Retorna duración.
   */
  duration(): number {
    return this._duracionSegundos;
  }
}