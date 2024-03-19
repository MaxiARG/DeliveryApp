import { View, Text } from 'react-native'
import React, { useState } from 'react'

// Mis Imports
import { ApiDelivery }         from '../../../data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../domain/useCases/auth/RegisterAuthUseCase';

export default function RegisterViewModel() {

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  }

  const register = async () => {
    const response = await RegisterAuthUseCase(values);
    console.log("sss " + JSON.stringify(response))
  }

  return ({...values, onChange, register})
}