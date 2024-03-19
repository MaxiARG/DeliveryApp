import Usuario from "../entities/Usuario";

export interface UsuarioLocalRepository {
    save(usuario: Usuario): Promise<void>;
    getUsuario(): Promise<Usuario>;
    deleteItem() : Promise<void>;
}