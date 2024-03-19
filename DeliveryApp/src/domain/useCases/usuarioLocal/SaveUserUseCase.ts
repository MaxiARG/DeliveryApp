import { UsuarioLocalRepositoryImpl } from "../../../data/repositories/UsuarioLocalRepository";

const { save } = new UsuarioLocalRepositoryImpl();

export const SaveUserUseCase = async (usuario: Usuario) => {
    return await save(usuario);
}