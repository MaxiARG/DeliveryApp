import { AxiosError } from "axios";
import Usuario from "../../domain/entities/Usuario";
import AuthRepository from "../../domain/repositories/AuthRepository";
import { ApiDelivery } from "../source/remote/api/ApiDelivery";
import ResponseApiDelivery from "../source/remote/models/ResponseApiDelivery";

export default class AuthRepositoryImpl implements AuthRepository{
    
    async register(user: Usuario) : Promise<ResponseApiDelivery>{
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + e);
            const apiError : ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
        }
    }


    async login(email: string, password: string) : Promise<ResponseApiDelivery>{
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/login', {email, password});
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + e);
            const apiError : ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);
        }
    }


}