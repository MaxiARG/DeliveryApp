import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../../components/Button' 
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';

export default function Register() {

  const { phone, name, onChange, password, lastName, email, confirmPassword, register} = useViewModel();

  return (
    <SafeAreaView className="flex h-full">

    <Image source={ require('../../../../assets/chef.jpg')} className="w-full h-5/6 opacity-90 bg-slate-900 "/>
    
    <View className="absolute  self-center justify-center content-center top-24 items-center">
      <Image source={require('../../../../assets/user_image.png')} className="w-32 h-32 mb-2"/>
      <Text className="color-white text-center font-bold">SELECCIONA UNA IMAGEN</Text>
    </View>

    {/* formulario */}
    <View className="w-full h-2/3 bg-white rounded-tl-2xl rounded-tr-2xl absolute bottom-0 ">
      <View className=" h-full">
        <View className=" w-9/12 self-center ">

          <Text className="font-extrabold color-slate-600 text-xl  mt-5 self-start mb-7">REGISTRARSE</Text>
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Nombre */}
        <CustomTextInput
          image={ require('../../../../assets/user.png')}
          onChangeText={onChange}
          keyboard='default'
          placeholder='Nombres'
          property='name'
          value={name}
        />

          {/* Apellido */}
        <CustomTextInput
          image={ require('../../../../assets/my_user.png')}
          onChangeText={onChange}
          keyboard='default'
          placeholder='Apellidos'
          property='lastName'
          value={lastName}
        />

          {/* Email */}
        <CustomTextInput
          image={ require('../../../../assets/email.png')}
          onChangeText={onChange}
          keyboard='email-address'
          placeholder='Correo Electronico'
          property='email'
          value={email}
        />

          {/* Telefono */}
        <CustomTextInput
          image={ require('../../../../assets/phone.png')}
          onChangeText={onChange}
          keyboard='default'
          placeholder='Teléfono'
          property='phone'
          value={phone}
        />

          {/* Contraseña y Confirmacion de contraseña */}
        <CustomTextInput
          image={ require('../../../../assets/password.png')}
          onChangeText={onChange}
          keyboard='default'
          placeholder='Contraseña'
          property='password'
          value={password}
          secureTextEntry
        />
            {/* Confirmacion Contraseña */}
        <CustomTextInput
          image={ require('../../../../assets/confirm_password.png')}
          onChangeText={onChange}
          keyboard='default'
          placeholder='Confirmar Contraseña'
          property='confirmPassword'
          value={confirmPassword}
          secureTextEntry
        />



        <View className="self-start w-full mt-5 mb-5">
          <Button 
          title="CONFIRMAR" 
          onPress={register} 
          color={'rgb(249 115 22)'}
          />
        </View>


        
        </ScrollView>
      </View>
      
    </View>
    </View>
  </SafeAreaView>
  )
}