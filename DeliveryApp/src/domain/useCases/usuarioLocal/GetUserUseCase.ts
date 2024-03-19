import { UsuarioLocalRepositoryImpl } from "../../../data/repositories/UsuarioLocalRepository";

const { getUsuario } = new UsuarioLocalRepositoryImpl();

export const GetUserUseCase = async () => {
    return await getUsuario();
}