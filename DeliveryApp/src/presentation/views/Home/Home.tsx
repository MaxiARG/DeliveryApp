import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView,  Text, TextInput, View } from 'react-native';
import Button from '../../components/Button'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {email, password, onChange, login, user} = useViewModel();

  useEffect(() => {
    if(user?.id !== null && user?.id !== undefined){
      navigation.navigate('ProfileInfo');
    }
  }, [user])
  

  return (
  <SafeAreaView className="flex h-full">

    <Image source={ require('../../../../assets/chef.jpg')} className="w-full h-5/6 opacity-90 bg-slate-900 "/>
    
    <View className="absolute  self-center justify-center content-center top-44">
      <Image source={require('../../../../assets/logo.png')} className="w-32 h-32"/>
      <Text className="color-white text-center font-bold">Food App</Text>
    </View>

    {/* formulario */}
    <View className="w-full h-1/3 bg-white rounded-tl-2xl rounded-tr-2xl absolute bottom-0 ">
      <View className=" h-full">
        <View className=" w-9/12 self-center ">
          <Text className="font-bold text-2xl self-start">Ingresar</Text>

          <CustomTextInput 
            image={ require('../../../../assets/email.png') }
            placeholder='Correo Electronico'
            keyboard='email-address'
            property='email'
            value={email}
            onChangeText={onChange}
          />

          <CustomTextInput 
            image={ require('../../../../assets/password.png') }
            placeholder='Contraseña'
            keyboard='default'
            property='password'
            secureTextEntry
            value={password}
            onChangeText={onChange}
          />

        <View className="self-start w-full mt-5 mb-5">
          <Button 
          title="Ingresar" 
          onPress={() => login()} 
          color={'rgb(249 115 22)'}
          />
        </View>

        <View className="flex-row justify-center  self-center">
          <Text>No tienes cuenta?</Text>
          <Text className="font-bold color-orange-500 underline" onPress={() => {
            
            navigation.navigate('Register')
            }}> Registrate</Text>
        </View>

      </View>
    </View>
    </View>
  </SafeAreaView>
  )
}
