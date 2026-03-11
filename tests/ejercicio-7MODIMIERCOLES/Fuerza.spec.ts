import { describe, test, expect } from 'vitest';
import {Fuerza} from "../../src/ejercicio-7MODIMIERCOLES/Fuerza"
import { IFuerzaSummary } from '../../src/ejercicio-7MODIMIERCOLES/IFuerzaSummary';

describe('Cardio Test', () => {
    test('Debe devolver las repeticiones', () => {
        const MiCardio = new Fuerza("prensa", 100 , 4, 10 ,20);
        expect(MiCardio.repeticiones).toBe(10)
    });
    test('Debe devolver las las series', () => {
        const MiCardio = new Fuerza("prensa", 100 , 4, 10 ,20);
        expect(MiCardio.series).toBe(4)
    });
    test('Debe devolver el summary', () => {
        const result: IFuerzaSummary = {nombreEjercicio: "prensa" , peso: 100}
        const MiCardio = new Fuerza("prensa", 100 , 4, 10 ,20);
        expect(MiCardio.summary()).toStrictEqual(result)
    });

    test('Debe devolver el summary', () => {
        const MiCardio = new Fuerza("prensa", 100 , 4, 10 ,20);
        expect(MiCardio.calories()).toBe(80)
    });

});