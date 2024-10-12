import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from '../Screens/AuthScreen';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';
import ImagePicker from '../Screens/ImagePicker';
import Bottom_Navigation from './Bottom_Navigation';
// import Product from '../Screens/Product';
// import AddToCart from '../Screens/AddToCart';


const Stack_Navigation = () => {

    const Stack = createNativeStackNavigator()

    return (
      <Stack.Navigator>
        
       <Stack.Screen name="AuthScreen" component={AuthScreen}/>
        <Stack.Screen name="LOGIN" component={Login}/>
        <Stack.Screen name="Sign up" component={SignUp}/>
        <Stack.Screen name="Navigation" component={Bottom_Navigation} options={{headerShown: false}}/>
      </Stack.Navigator>
      // <NavigationContainer>
    // {/* <Stack.Navigator>
    //   <Stack.Screen 
    //   options={{
    //     headerStyle: {
    //       backgroundColor: '#f59e0b',
    //     },
    //     headerTitleStyle: {
    //       color: 'white',
    //     },
    //     headerTitleAlign: 'center',
    //   }}
    //   name="Product" component={Product}/>
    //   <Stack.Screen name="Add Cart" component={AddToCart}/>
    // </Stack.Navigator> */}
  // </NavigationContainer>
  )
}

export default Stack_Navigation

const styles = StyleSheet.create({})