
import "./global.css"
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import Home from "./src/presentation/views/Home/Home"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/presentation/views/Register/Register"; 
import ProfileInfo from "./src/presentation/views/Profile/Info/ProfileInfo";

export type RootStackParamList = {
  Home: undefined,
  Register: undefined,
  ProfileInfo: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();


function App(): React.JSX.Element {
  return (
  <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Register' component={Register}  options={{headerShown: true}}/>
      <Stack.Screen name='ProfileInfo' component={ProfileInfo}  options={{headerShown: true}}/>
    </Stack.Navigator>
  </NavigationContainer>

  )
}




export default App;
