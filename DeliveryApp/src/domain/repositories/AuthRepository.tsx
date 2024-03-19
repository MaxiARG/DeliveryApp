import ResponseApiDelivery from "../../data/source/remote/models/ResponseApiDelivery";
import Usuario from "../entities/Usuario";

export default interface AuthRepository{
    register(user: Usuario) : Promise<ResponseApiDelivery>;
    login(email: string, password: string) : Promise<ResponseApiDelivery>;
}