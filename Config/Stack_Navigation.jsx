import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Bottom_Navigation from './Bottom_Navigation';


const Stack_Navigation = () => {

    const Stack = createNativeStackNavigator()

    return (
      <Stack.Navigator>
        
       {/* <Stack.Screen name="AuthScreen" component={AuthScreen}/> */}
        <Stack.Screen name="LOGIN" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Sign up" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Navigation" component={Bottom_Navigation} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}

export default Stack_Navigation

const styles = StyleSheet.create({})