import { IRegistrable } from "./IRegistrable";

/**
 * Clase que representa un entrenamiento de Cardio
 */
export class Cardio implements IRegistrable<string> {
  /**
   * @param _name Nombre de la actividad
   * @param _distance Distancia recorrida en kilómetros
   * @param _duration Minutos de duración
   * @param _type Tipo de actividad
   * @param _calories Calorías quemadas
   */
  constructor(
    private readonly _name: string,
    private readonly _distance: number,
    private readonly _duration: number,
    private readonly _type: string,
    private readonly _calories: number
  ) {
    this.validate();
  }

  get name(): string { return this._name; }
  get distance(): number { return this._distance; }
  get duration(): number { return this._duration; }
  get type(): string { return this._type; }

  /**
   * Retorna el resumen del entrenamiento
   */
  summary(): string {
    return `${this._name} - ${this._distance} km`;
  }

  /**
   * Retorna las calorias quemadas
   */
  calories(): number {
    return this._calories;
  }

  /**
   * Funcion que valida que los atributos sean correctos
   */
    validate(): void {
        if (this._distance < 0) {
            throw new Error ("La distancia no puede ser negativa")
        }
        if (this._duration <= 0) {
            throw new Error("La duración debe ser positiva");
        }
        if (this._calories < 0){
          throw new Error("Calorías inválidas");  
        } 
  }
}