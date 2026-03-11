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

/*
    test('Debe lanzar error si la duración es negativa en validate()', () => {
        const MiCardio = new Cardio("correr", -3, 60, "correr", 300);
        expect(() => MiCardio.validate()).toThrow("La duración debe ser positiva");
    });
    test('Debe lanzar error si la distancia es negativa en validate()', () => {
        const MiCardio = new Cardio("correr", 3, -60, "correr", 300);
        expect(() => MiCardio.validate()).toThrow("La distancia no puede ser negativa");
    });
    test('Debe lanzar error si las calorias en validate()', () => {
        const MiCardio = new Cardio("correr", -3, 60, "correr", -300);
        expect(() => MiCardio.validate()).toThrow("Calorías inválidas");
    });
*/
});