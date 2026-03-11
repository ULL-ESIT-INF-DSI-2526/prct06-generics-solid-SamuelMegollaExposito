/**
 * Interfaz genérica para entrenamientos de una aplicación.
 * @template T Tipo de los datos de información del elemento.
 */

export interface IRegistrable<T>{
    /**
     * Accede a la información descriptiva de un entrenamiento
     * @returns Dato de tipo T
     */
    summary(): T;

    /**
     * Accede a las calorias estimadas
     * @returns Dato de tipo number
     */
    calories(): number;
}