import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import LoginAuthUseCase from '../../../domain/useCases/auth/LoginAuthUseCase';
import { SaveUserUseCase } from '../../../domain/useCases/usuarioLocal/SaveUserUseCase';
import { GetUserUseCase } from '../../../domain/useCases/usuarioLocal/GetUserUseCase';
import useUserLocal from '../../hooks/useUserLocal';

const HomeViewModel = () => {

    const [values, setValues] = useState({email: '',password: ''});
    const {user} = useUserLocal();


  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  }

  const login = async () =>{
    const response = await LoginAuthUseCase(values.email, values.password);
    
    if(!response.success){
      console.log("respuesta error" + JSON.stringify(response));
    }else{
      await SaveUserUseCase(response.data);
    } 
  }


  //Considerar que como en MVP, la parte P, tenemos que devolver los valores formateados y listos para ser usados.
  return ({...values, onChange, login, user})
}

export default HomeViewModel;