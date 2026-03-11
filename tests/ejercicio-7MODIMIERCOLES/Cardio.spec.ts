import { describe, test, expect, beforeEach} from 'vitest';
import {Cardio} from "../../src/ejercicio-7MODIMIERCOLES/Cardio"

describe('Cardio Test', () => {

    test('Debe devolver el nombre', () => {
        const MiCardio = new Cardio("correr", 3, 60, "correr", 300);
        expect(MiCardio.name).toBe("correr");
    });
    test('Debe devolver los kilometros', () => {
        const MiCardio = new Cardio("correr", 3, 60, "correr", 300);
        expect(MiCardio.distance).toBe(3);
    });
    test('Debe devolver la duracion', () => {
        const MiCardio = new Cardio("correr", 3, 60, "correr", 300);
        expect(MiCardio.duration).toBe(60);
    });
    test('Debe devolver el tipo', () => {
        const MiCardio = new Cardio("correr", 3, 60, "correr", 300);
        expect(MiCardio.type).toBe("correr");
    });
    test('Debe devolver las calorias quemadas', () => {
        const MiCardio = new Cardio("correr", 3, 60, "correr", 300);
        expect(MiCardio.calories()).toBe(300);
    });

    test('Debe devolver el summaty', () => {
        const MiCardio = new Cardio("correr", 3, 60, "correr", 300);
        expect(MiCardio.summary()).toBe("correr - 3 km")
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