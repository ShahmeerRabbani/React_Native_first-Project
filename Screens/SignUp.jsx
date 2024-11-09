import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import { BASE_URL } from '../Config/constraints';

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const handle_Signup = async () => {
      if(firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '' ){
        alert('Please Fill all inputs')
      }
      else{
        try {
          const userObj ={
            firstName,
            lastName,
            email,
            password
          }
          const response = await axios.post(`${BASE_URL}/api/signup`, userObj)
          console.log(response)
          alert('Sign Up Successfully')
          navigation.navigate('LOGIN')
        } catch (error) {
          console.log(error)
        }
      }
    }
    // auth().createUserWithEmailAndPassword(email, password)
    // .then((res) => {
    //   console.log(res)
    //  AsyncStorage.setItem('userCredential', JSON.stringify(userObj))
    // })



  return (
    <View style={styles.container}>
    <Text style={[styles.heading, styles.text_color]}>Create Account</Text>
    <TextInput onChangeText={e => setFirstName(e)} style={styles.input} placeholder='First name'/>
    <TextInput onChangeText={e => setLastName(e)} style={styles.input} placeholder='Last name'/>
    <TextInput onChangeText={e => setEmail(e)} style={styles.input} placeholder='Email'/>
    <TextInput onChangeText={e => setPassword(e)} secureTextEntry={true} style={styles.input} placeholder='Password'/>
    
    <TouchableOpacity onPress={handle_Signup}><Text style={[styles.btn, {backgroundColor: '#99f073'}]}>Sign up</Text></TouchableOpacity>
    <Text style={styles.text_color}>Already have an account? <Text style={{color: '#7dc45e'}} onPress={() => navigation.navigate('LOGIN')}>Login</Text></Text>

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
    fontWeight: 'bold',
  },
  input:{
    width: 270,
    height: 55,
    backgroundColor: '#fff',
    borderColor: '#000',
  },
  btn:{
    width: 200,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'olive',
    textAlign: 'center',
    borderRadius: 7
},
text_color:{
  color: '#000'
}
})