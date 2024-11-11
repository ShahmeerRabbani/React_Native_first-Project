import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Product from '../Screens/Product'
import AddToCart from '../Screens/AddToCart'
import Home from '../Screens/Home'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from '../Screens/ImagePicker'
import Browse from '../Screens/Browse'
import Order from '../Screens/Order'
import Account from '../Screens/Account'

const Bottom_Navigation = () => {

    const Tab = createBottomTabNavigator()

  return (
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: '#1D102D'}
      }}>
      <Tab.Screen
         options={{
          headerShown: false,
           tabBarIcon: () => {
             return  <Ionicons name = 'home-outline' size={30} color='#B3AAAF'/>
            },
          }}
        name = 'Home' component={Home}/>
          <Tab.Screen
          options={{
            headerShown: false,
              tabBarIcon: () => {
                  return <MaterialCommunityIcons name = 'file-find-outline' size={30} color='#B3AAAF'/>
                 
              },
          }}
          name = 'Browse' component={Browse}/>
        <Tab.Screen
        options={{
          headerShown: false,
            tabBarIcon: () => {
                return  <Ionicons name = 'cart-outline' size={30} color='#B3AAAF'/>
            },
        }}
        name = 'Basket' component={AddToCart}/>

        <Tab.Screen
         name='Order' component={Order}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name='filetext1' size={30} color='#B3AAAF'/>
          }
        }}
        />
        <Tab.Screen
         name='Account' component={Account}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <FontAwesome5 name='user' size={30} color='#B3AAAF'/>
          }
        }}
        />
        
      </Tab.Navigator>
  )
}

export default Bottom_Navigation

const styles = StyleSheet.create({})