import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStorage_Work = () => {

    const navigation = useNavigation()

    const obj = {
      name: 'shahmeer',
      age: 21,
      email: 'shahmeer@gmail.com',
    }
  
    const handle_Store = async() => {
      await AsyncStorage.setItem('user', 'Data Has been Store')
    }
    const handle_GetData = async() => {
     const data = await AsyncStorage.getItem('user')
     console.log(data)
    }
  
    const handle_Obj = async() => {
      await AsyncStorage.setItem('userInfo', JSON.stringify(obj))
    }
  
    const handle_getObj = async() => {
      const data = await AsyncStorage.getItem('userInfo')
      console.log(data)
     } 
    const handle_AllData = async() => {
      const data = await AsyncStorage.getAllKeys()
      console.log(data)
     } 
     const handle_picker = () => {
      navigation.navigate('Image Picker')
     }

  return (
    <View>
      <Text>AsyncStorage_Work</Text>
      <TouchableOpacity onPress={handle_Store} ><Text style={styles.btn}>Store Data</Text></TouchableOpacity>
      <TouchableOpacity onPress={handle_GetData} ><Text style={[styles.btn, {backgroundColor: 'goldenrod'}]}>Get Data</Text></TouchableOpacity>
      <TouchableOpacity onPress={handle_Obj} ><Text style={[styles.btn, {backgroundColor: 'seagreen'}]}>set Obj</Text></TouchableOpacity>
      <TouchableOpacity onPress={handle_getObj} ><Text style={[styles.btn, {backgroundColor: '#3eed9b'}]}>Get Obj</Text></TouchableOpacity>
      <TouchableOpacity onPress={handle_AllData} ><Text style={[styles.btn, {backgroundColor: '#c073f0'}]}>Get All Obj</Text></TouchableOpacity>
      <TouchableOpacity onPress={handle_picker} ><Text style={[styles.btn, {backgroundColor: '#72baa9'}]}>GO to Image Picker</Text></TouchableOpacity>
   
    </View>
  )
}

export default AsyncStorage_Work

const styles = StyleSheet.create({})