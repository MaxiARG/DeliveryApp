import React, { useEffect, useState } from 'react'
import { GetUserUseCase } from '../../domain/useCases/usuarioLocal/GetUserUseCase'
import Usuario from '../../domain/entities/Usuario'

export default function useUserLocal() {

    const [user, setUser] = useState<Usuario>()

    useEffect(() => {
        getUserSession()
      })
  
    const getUserSession = async () => {
        const user = await GetUserUseCase();
        console.log(JSON.stringify(user));
        setUser(user);
    }
    return{ user }
}