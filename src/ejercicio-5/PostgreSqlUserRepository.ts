import { IUserRepository } from "./IUserRepository";
import { IUser } from "./IUser";

/**
 * Implementación del repositorio específica para PostgreSQL.
 * Demuestra la facilidad de añadir nuevos almacenamientos.
 */
export class PostgreSqlUserRepository implements IUserRepository {
  findById(id: string): IUser | null {
    console.log("Querying PostgreSQL...");
    return { id, name: "Grace Hopper" };
  }
}