import { IRegistrable } from "./IRegistrable";
import { IFuerzaSummary } from "./IFuerzaSummary";

export class Fuerza implements IRegistrable<IFuerzaSummary>{
  /**
   * @param _nombreEjercicio Nombre del ejercicio.
   * @param _peso cantidad de peso.
   * @param _series Numero de series
   * @param _repeticiones Numero de repeticiones
   * @param _caloriesSerie Numero de calorias que se quema por serie
   */
    constructor(
        private readonly _nombreEjercicio: string,
        private readonly _peso: number,
        private readonly _series: number,
        private readonly _repeticiones: number,
        private readonly _caloriesSerie: number
    ){
        this.validate();
    }

    get series(){return this._series}
    get repeticiones(){return this._repeticiones}

  /**
   * Retorna el resumen del entrenamiento
   */
    summary(): IFuerzaSummary {
        return{
            nombreEjercicio: this._nombreEjercicio,
            peso: this._peso
        }
    }

  /**
   * Retorna las calorias quemadas
   */
    calories(): number {
        return this._caloriesSerie * this._series;
    }

    /**
     * Funcion que valida que los atributos sean correctos
     */
    validate(): void {
        if (this._series < 0) throw new Error("Las series no pueden ser negativas");
        if (this._repeticiones < 0) throw new Error("Las repeticiones no pueden ser negativas");
        if (this._caloriesSerie < 0) throw new Error("Calorías inválidas");
    }
}