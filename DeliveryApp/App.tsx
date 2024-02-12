
import "./global.css"
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView, StatusBar, Text, TextInput, View,
} from 'react-native';
import Button from "./src/components/Button";

function App(): React.JSX.Element {
  return (
  <SafeAreaView className="flex h-full">

<Image source={ require('./assets/chef.jpg')} className="w-full h-5/6 opacity-90 bg-slate-900 "/>
    

    <View className="absolute  self-center justify-center content-center top-44">
      <Image source={require('./assets/logo.png')} className="w-32 h-32"/>
      <Text className="color-white text-center font-bold">Food App</Text>
    </View>

    {/* formulario */}
    <View className="w-full h-1/3 bg-white rounded-tl-2xl rounded-tr-2xl absolute bottom-0 ">
      <View className=" h-full">
        <View className=" w-9/12 self-center ">
          <Text className="font-bold text-2xl self-start">Ingresar</Text>

          <View className="flex-row justify-center  self-start">
            <Image source={ require('./assets/user.png')} 
                    className="w-9 h-9 self-center mr-4 " />
            <TextInput placeholder="Correo Electronico" keyboardType="email-address"
                    className="border-b-2  border-b-gray-200  "/>
          </View>

          <View className="flex-row justify-start w-full flex">
            <Image source={ require('./assets/password.png')} 
                    className="w-9 h-9 self-center mr-4 flex" />
            <TextInput placeholder="Contraseña" keyboardType="default" secureTextEntry
                    className="border-b-2  border-b-gray-200 flex w-fi "/>
          </View>

        <View className="self-start w-full mt-5 mb-5">
          <Button 
          title="Ingresar" 
          onPress={() => {}} 
          color={'rgb(249 115 22)'}
          
          />
        </View>

        <View className="flex-row justify-center  self-center">
          <Text>No tienes cuenta?</Text>
          <Text className="font-bold color-orange-500 underline"> Registrate</Text>
        </View>
        
      </View>
    </View>
    </View>
  </SafeAreaView>)
}

export default App;
