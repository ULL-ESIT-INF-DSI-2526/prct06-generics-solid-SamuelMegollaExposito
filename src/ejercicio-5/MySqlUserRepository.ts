import { IUserRepository } from "./IUserRepository";
import { IUser } from "./IUser";

/**
 * Implementación del repositorio específica para MySQL.
 */
export class MySqlUserRepository implements IUserRepository {
  /**
   * Simula una consulta en una base de datos MySQL.
   * @param id ID del usuario.
   */
  findById(id: string): IUser | null {
    console.log("Querying MySQL...");
    // Simulación de resultado
    return { id, name: "Ada" };
  }
}