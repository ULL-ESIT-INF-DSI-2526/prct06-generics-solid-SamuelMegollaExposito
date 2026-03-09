import { describe, test, expect } from 'vitest';
import { UserService } from '../../src/ejercicio-5/UserService';
import { IUserRepository } from '../../src/ejercicio-5/IUserRepository';
import { IUser } from '../../src/ejercicio-5/IUser';
import { MySqlUserRepository } from '../../src/ejercicio-5/MySqlUserRepository';

/**
 * Creación de un Mock manual para las pruebas.
 * No necesitamos una DB real para probar la lógica de UserService.
 */
class MockUserRepository implements IUserRepository {
  findById(id: string): IUser | null {
    if (id === '1') return { id: '1', name: 'test user' };
    return null;
  }
}

describe('Pruebas de UserService (DIP)', () => {
  test('Debe obtener el nombre en mayúsculas correctamente usando el Mock', () => {
    const mockRepo = new MockUserRepository();
    const service = new UserService(mockRepo);
    
    expect(service.getUserName('1')).toBe('TEST USER');
  });

  test('Debe lanzar un error si el usuario no existe', () => {
    const mockRepo = new MockUserRepository();
    const service = new UserService(mockRepo);
    
    expect(() => service.getUserName('99')).toThrow("User not found");
  });

  test('Debe funcionar con la implementación real de MySQL', () => {
    const realRepo = new MySqlUserRepository();
    const service = new UserService(realRepo);
    
    // Aquí veríamos el log "Querying MySQL..."
    expect(service.getUserName('any')).toBe('ADA');
  });
});