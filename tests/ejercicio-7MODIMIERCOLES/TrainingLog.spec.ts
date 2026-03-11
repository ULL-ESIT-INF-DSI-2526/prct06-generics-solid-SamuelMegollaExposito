import { describe, test, expect, beforeEach } from 'vitest';
import { Cardio } from '../../src/ejercicio-7MODIMIERCOLES/Cardio';
import { Fuerza } from '../../src/ejercicio-7MODIMIERCOLES/Fuerza';
import { TrainingLog } from '../../src/ejercicio-7MODIMIERCOLES/TrainingLog';
import { CardioyFuerza } from '../../src/ejercicio-7MODIMIERCOLES/TrainingLog';
import { IRegistrable } from '../../src/ejercicio-7MODIMIERCOLES/IRegistrable';

describe('Pruebas de TrainingLog y Entrenamientos', () => {
  let log: TrainingLog<IRegistrable<unknown>>;

  beforeEach(() => {
    log = new TrainingLog<IRegistrable<unknown>>();
  });

  test('Cardio debe retornar el resumen en string correctamente', () => {
    const run = new Cardio('Running', 10, 50, 'Carrera', 600);
    expect(run.summary()).toBe('Running - 10 km');
    expect(run.calories()).toBe(600);
  });

  test('Strength debe calcular calorías y retornar resumen en objeto', () => {
    const bench = new Fuerza('Press', 80, 4, 10, 50);
    expect(bench.summary()).toEqual({ nombreEjercicio: 'Press', peso: 80 });
    expect(bench.calories()).toBe(200); 
  });

  test('TrainingLog debe calcular totalBurn de diferentes tipos', () => {
    log.add(new Cardio('Ciclismo', 20, 60, 'Bici', 400));
    log.add(new Fuerza('Sentadilla', 100, 2, 5, 100));
    
    expect(log.totalBurn()).toBe(600);
  });

  test('Debe permitir filtrar entrenamientos por calorías', () => {
    log.add(new Cardio('A', 1, 10, 'T', 50));
    log.add(new Cardio('B', 1, 10, 'T', 500));
    
    const highIntensity = log.filter(t => t.calories() > 100);
    expect(highIntensity.size()).toBe(1);
    expect(highIntensity.get(0).calories()).toBe(500);
  });

  test('totalBurn debe retornar 0 si está vacío', () => {
    expect(log.totalBurn()).toBe(0);
  });

  test('Debe fallar al intentar remover un índice inexistente', () => {
    expect(() => log.remove(5)).toThrow("Índice fuera de límites");
  });
});