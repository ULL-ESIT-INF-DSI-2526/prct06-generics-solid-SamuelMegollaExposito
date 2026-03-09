import { IUserRepository } from "./IUserRepository";

/**
 * Clase de servicio para gestionar lógica de usuarios.
 * Aplica Dependency Injection para desacoplarse del almacenamiento.
 */
export class UserService {
  /**
   * El constructor recibe la abstracción, no la implementación.
   * @param repo Cualquier repositorio que implemente IUserRepository.
   */
  constructor(private repo: IUserRepository) {}

  /**
   * Obtiene el nombre de un usuario en mayúsculas.
   * @param id ID del usuario.
   * @returns Nombre formateado.
   * @throws Error si el usuario no existe.
   */
  getUserName(id: string): string {
    const user = this.repo.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user.name.toUpperCase();
  }
}