import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const handle_Signup = () => {
      if(userName.trim() === '' || email.trim() === '' || password.trim() === '' ){
        alert('Please Fill all inputs')
      }
      else{
        navigation.navigate('LOGIN')
        const userObj ={
          userName,
          email,
          password
        }
        AsyncStorage.setItem('userCredential', JSON.stringify(userObj))
        console.log(userName, email, password)
      }
  }



  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Create Account</Text>
    <TextInput onChangeText={e => setUserName(e)} style={styles.input} placeholder='Name'/>
    <TextInput onChangeText={e => setEmail(e)} style={styles.input} placeholder='Email'/>
    <TextInput onChangeText={e => setPassword(e)} secureTextEntry={true} style={styles.input} placeholder='Password'/>
    
    <TouchableOpacity onPress={handle_Signup}><Text style={[styles.btn, {backgroundColor: '#99f073'}]}>Sign up</Text></TouchableOpacity>
    <Text>Already have an account? <Text style={{color: '#7dc45e'}} onPress={() => navigation.navigate('LOGIN')}>Login</Text></Text>

  </View>
  )
}

export default SignUp

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