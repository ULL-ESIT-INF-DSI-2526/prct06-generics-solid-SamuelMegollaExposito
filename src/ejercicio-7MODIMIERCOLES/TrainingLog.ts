import { Fuerza } from "./Fuerza";
import { Cardio } from "./Cardio";
import { IFuerzaSummary } from "./IFuerzaSummary";
import { IRegistrable } from "./IRegistrable";

/**
 * Union de tipo de Cardio y Fuerza
 */
export type CardioyFuerza = IRegistrable<string> | IRegistrable<IFuerzaSummary>;

/**
 * Clase generica que gestiona una coleccion de entrenamientos indistintamente de cardio o fuerza
 */
export class TrainingLog<T extends IRegistrable<unknown>>{
    private _entrenamientos: T[] = [];
    
    /**
     * Añade un entrenemaiento a la coleccion
     * @param item Entrenamiento que se quiere añadir
     */
    add(item: T): void{
        this._entrenamientos.push(item);
    }

    /**
     * Elimina un entrenamiento de la coleccion
     * @param index Posicion del entrenamineto a quitar
     */
    remove(index: number): void{
        if( index < 0 || index > this._entrenamientos.length){
            throw new Error ("Índice fuera de límites")
        }

        this._entrenamientos.splice(index,1);
    }
    
    /**
     * Devuelve un entrenamiento de la collecion
     * @param index Posicion del entrenamiento a recoger
     * @returns Entrenamiento seleccionado
     */
    get(index: number): T{
        return this._entrenamientos[index];
    }

    /**
     * Devuelve el tamaño total de la coleccion de entrenamientos
     * @returns Tamaño de la coleccion de entrenamientos
     */
    size(): number{
        return this._entrenamientos.length;
    }

    /**
     * Filtra los entrenamientos y retorna un nuevo TrainingLog
     */
    filter(predicate: (item: T) => boolean): TrainingLog<T> {
        const newLog = new TrainingLog<T>();
        this._entrenamientos.filter(predicate).forEach(item => newLog.add(item));
        return newLog;
    }

    /**
     * Retorna la suma total de la calorias quemadas
     */
    totalBurn(): number {
        if (this._entrenamientos.length === 0){
            return 0;
        }
        return this._entrenamientos.reduce((total, item) => total + item.calories(), 0);
    }
}