import { IReproducible } from "./IReproducible";
import { IPodcastData } from "./IPodcastData";

/**
 * Clase que representa un Podcast.
 */
export class Podcast implements IReproducible<IPodcastData> {
  /**
   * @param _nombrePrograma Nombre del programa.
   * @param _numeroEpisodio Número de episodio.
   * @param _tematica Temática.
   * @param _presentador Presentador.
   * @param _fechaInicio Fecha inicio.
   * @param _fechaFin Fecha fin.
   */
  constructor(
    private readonly _nombrePrograma: string,
    private readonly _numeroEpisodio: number,
    private readonly _tematica: string,
    private readonly _presentador: string,
    private readonly _fechaInicio: Date,
    private readonly _fechaFin: Date
  ) {
    if (_fechaFin.getTime() <= _fechaInicio.getTime()) {
      throw new Error("La fecha de fin debe ser posterior");
    }
  }

  get tematica(): string { return this._tematica; }
  get presentador(): string { return this._presentador; }

  /**
   * Retorna el objeto de datos del podcast.
   */
  data(): IPodcastData {
    return {
      nombrePrograma: this._nombrePrograma,
      numeroEpisodio: this._numeroEpisodio
    };
  }

  /**
   * Calcula la duración por diferencia de fechas.
   */
  duration(): number {
    return (this._fechaFin.getTime() - this._fechaInicio.getTime()) / 1000;
  }
}