import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Product from '../Screens/Product'
import AddToCart from '../Screens/AddToCart'
import Home from '../Screens/Home'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from '../Screens/ImagePicker'

const Bottom_Navigation = () => {

    const Tab = createBottomTabNavigator()

  return (
      <Tab.Navigator>
        <Tab.Screen
        options={{
            tabBarIcon: () => {
                return <MaterialCommunityIcons name = 'tshirt-crew' size={30} color='#f59e0b'/>
               
            },
        }}
        name = 'Product' component={Product}/>
      <Tab.Screen
         options={{
            tabBarIcon: () => {
                return  <AntDesign name = 'home' size={30} color='#f59e0b'/>
            },
        }}
        name = 'Home' component={Home}/>
        <Tab.Screen
        options={{
            tabBarIcon: () => {
                return  <AntDesign name = 'shoppingcart' size={30} color='#f59e0b'/>
            },
        }}
        name = 'Add Cart' component={AddToCart}/>

        <Tab.Screen
         name='Image Picker' component={ImagePicker}
        options={{
          tabBarIcon: () => {
            return <AntDesign name='camera' size={30} color='#f59e0b'/>
          }
        }}
        />
        
      </Tab.Navigator>
  )
}

export default Bottom_Navigation

const styles = StyleSheet.create({})