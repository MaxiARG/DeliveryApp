import Usuario from "../../domain/entities/Usuario";
import { UsuarioLocalRepository } from "../../domain/repositories/UsuarioLocalRepository";
import { LocalStorage } from "../source/local/LocalStorage";

export class UsuarioLocalRepositoryImpl implements UsuarioLocalRepository{

    async save(usuario: Usuario): Promise<void> {
        const {save } = LocalStorage();
        await save('usuario', JSON.stringify(usuario));
    }

    async getUsuario(): Promise<Usuario> {
        const {getItem} = LocalStorage();
        const data = await getItem('usuario');
        return JSON.parse(data!) as Usuario;
    }

    async deleteItem(): Promise<void> {
        const { deleteItem } = LocalStorage();
        await deleteItem('usuario');
    }

    
    
}