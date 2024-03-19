import Usuario from "../../entities/Usuario";
import AuthRepositoryImpl from "../../../data/repositories/AuthRepositoryImpl";

//este codigo se cae a pedazos
const {register} = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (user: Usuario) => {
    return await register(user);
}