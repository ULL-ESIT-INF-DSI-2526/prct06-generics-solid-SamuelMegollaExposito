import { describe, test, expect, beforeEach } from 'vitest';
import { History, ReproducibleElement } from '../../src/ejercicio-6MODILUNES/History';
import { Song } from '../../src/ejercicio-6MODILUNES/Song';
import { Podcast } from '../../src/ejercicio-6MODILUNES/Podcast';

describe('Pruebas de History sin any ni unknown', () => {
  let historial: History<ReproducibleElement>;

  beforeEach(() => {
    historial = new History<ReproducibleElement>();
  });

  test('Debe sumar duraciones de canciones y podcasts correctamente', () => {
    const cancion = new Song('S1', 'A1', 180, 'Pop', 'Album1');
    const podcast = new Podcast('P1', 10, 'T1', 'H1', new Date(0), new Date(120000)); // 120s
    
    historial.add(cancion);
    historial.add(podcast);
    
    expect(historial.duration()).toBe(300);
  });

  test('Debe filtrar elementos por un criterio dado', () => {
    historial.add(new Song('C1', 'A1', 10, 'G', 'A'));
    historial.add(new Song('C2', 'A1', 500, 'G', 'A'));
    
    const largo = historial.filter(el => el.duration() > 100);
    expect(largo.size()).toBe(1);
    expect(largo.get(0).duration()).toBe(500);
  });

  test('Debe lanzar error si las fechas del podcast son erróneas', () => {
    const ahora = new Date();
    expect(() => new Podcast('P', 1, 'T', 'H', ahora, ahora)).toThrow();
  });
});