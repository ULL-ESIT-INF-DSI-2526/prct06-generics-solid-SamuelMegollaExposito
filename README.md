[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/BJNBiZ0d)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=22988799)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2526/prct06-generics-solid-SamuelMegollaExposito/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2526/prct06-generics-solid-SamuelMegollaExposito?branch=main)

import { IRegistrable } from "./IRegistrable";
import { IStrengthSummary } from "./IStrengthSummary";

import { describe, test, expect, beforeEach } from 'vitest';
import { Cardio } from '../src/ejercicio-7/Cardio';
import { Strength } from '../src/ejercicio-7/Strength';
import { TrainingLog, RegistrableElement } from '../src/ejercicio-7/TrainingLog';

describe('Pruebas de TrainingLog y Entrenamientos', () => {
  let log: TrainingLog<RegistrableElement>;

  beforeEach(() => {
    log = new TrainingLog<RegistrableElement>();
  });

  test('Cardio debe retornar el resumen en string correctamente', () => {
    const run = new Cardio('Running', 10, 50, 'Carrera', 600);
    expect(run.summary()).toBe('Running - 10 km');
    expect(run.calories()).toBe(600);
  });

  test('Strength debe calcular calorías y retornar resumen en objeto', () => {
    const bench = new Strength('Press', 80, 4, 10, 50);
    expect(bench.summary()).toEqual({ name: 'Press', weight: 80 });
    expect(bench.calories()).toBe(200); // 4 series * 50 cal
  });

  test('TrainingLog debe calcular totalBurn de diferentes tipos', () => {
    log.add(new Cardio('Ciclismo', 20, 60, 'Bici', 400));
    log.add(new Strength('Sentadilla', 100, 2, 5, 100));
    
    expect(log.totalBurn()).toBe(600); // 400 + 200
  });

  test('Debe permitir filtrar entrenamientos por calorías', () => {
    log.add(new Cardio('A', 1, 10, 'T', 50));
    log.add(new Cardio('B', 1, 10, 'T', 500));
    
    const highIntensity = log.filter(t => t.calories() > 100);
    expect(highIntensity.size()).toBe(1);
    expect(highIntensity.get(0).calories()).toBe(500);
  });

  test('Debe lanzar error ante datos inválidos', () => {
    expect(() => new Cardio('E', -5, 10, 'T', 100)).toThrow("La distancia no puede ser negativa");
    expect(() => new Strength('E', 50, 0, 10, 10)).toThrow("Series y repeticiones deben ser positivas");
  });

  test('totalBurn debe retornar 0 si está vacío', () => {
    expect(log.totalBurn()).toBe(0);
  });

  test('Debe fallar al intentar remover un índice inexistente', () => {
    expect(() => log.remove(5)).toThrow("Índice fuera de límites");
  });
});