import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import { BASE_URL } from '../Config/constraints';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
   
  // const userData = async () =>{
  //   const data =await AsyncStorage.getItem('userCredential')
  //   const setData = JSON.parse(data)

  //  }

  // userData()

    const handle_home = async() => {
      if(email.trim() === '' || password.trim() === ''){
        alert('Please fill in all fields')
      }
      else{
        const userObj = {
          email,
          password
        }
        try {
          const response = await axios.post(`${BASE_URL}/login`, userObj)
          console.log(response)
          alert('Login successfully')
        } catch (error) {
          console.log(error);
          
        }
      }
    }
    
    // auth().signInWithEmailAndPassword(email, password)
    // .then((res) => {
    //   navigation.navigate('Navigation')
    // })
    // .catch((err) => {
    //   console.log(err)
    // })

  return (
    <ImageBackground style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>
      <TextInput onChangeText={e => setEmail(e)} style={styles.input} placeholder='Email'/>
      <TextInput onChangeText={e => setPassword(e)} style={styles.input} secureTextEntry={true} placeholder='Password'/>
      <Text>Forgot password?</Text>
      
      <TouchableOpacity onPress={handle_home} ><Text style={[styles.btn, {backgroundColor: '#99f073'}]}>Login</Text></TouchableOpacity>
      <Text>Don't have a account? <Text style={{color: '#7dc45e'}} onPress={() => navigation.navigate('Sign up')}>Sign up</Text></Text>

    </ImageBackground>
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