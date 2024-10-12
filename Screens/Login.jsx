import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {

  const navigation = useNavigation()
   
  const userData = async () =>{
    const data =await AsyncStorage.getItem('userCredential')
    const setData = JSON.parse(data)

    console.log(setData)
   }

  userData()

    const handle_home = () => {
     navigation.navigate('Navigation')
    }

   




  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>
      <TextInput style={styles.input} placeholder='Email'/>
      <TextInput style={styles.input} placeholder='Password'/>
      <Text>Forgot password?</Text>
      
      <TouchableOpacity onPress={handle_home} ><Text style={[styles.btn, {backgroundColor: '#99f073'}]}>Login</Text></TouchableOpacity>
      <Text>Don't have a account? <Text style={{color: '#7dc45e'}} onPress={() => navigation.navigate('Sign up')}>Sign up</Text></Text>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input:{
    width: 270,
    height: 55,
    backgroundColor: '#fff',
    borderColor: '#000'
  },
  btn:{
    width: 200,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'olive',
    textAlign: 'center',
    borderRadius: 7
},
})