import { IUser } from "./IUser";

/**
 * Interfaz genérica para el repositorio de usuarios.
 * Define el contrato que cualquier almacenamiento debe seguir.
 */
export interface IUserRepository {
  /**
   * Busca un usuario por su identificador único.
   * @param id Identificador del usuario.
   * @returns El usuario encontrado o null.
   */
  findById(id: string): IUser | null;
}