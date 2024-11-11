import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { BASE_URL } from '../Config/constraints';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  
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
          const status = response.data
          if(status.status === false){
            alert(status.message)
            return;
          }
          alert(response.data.message)
          const token = response.data.token
          const storage = AsyncStorage.setItem('token', token)
          navigation.navigate('Navigation')
        } catch (error) {
          console.log(error);
          
        }
      }
    }
  return (
    <LinearGradient 
    colors={['rgba(2,0,36,1)', 'rgba(47,49,120,1)', 'rgba(0,0,0 ,1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.container}>
      <View style={styles.food_head}>
        <Text style={{fontSize: 24}}>FOODIE</Text>
        <Text style={{fontSize: 20, color: '#fff'}}>Deliver Favorite Food</Text>
      </View>
      <View style={styles.Form}>

      <Text style={styles.heading}>Login</Text>
      <TextInput label="Email" onChangeText={e => setEmail(e)} style={styles.input}/>
      <TextInput  label="Password" onChangeText={e => setPassword(e)} style={styles.input} secureTextEntry
      right={<TextInput.Icon icon="eye" />} />
      <View style={{}}>
      <Text style={{color: '#fff',}}>Forgot password?</Text>
      </View>
      
      <TouchableOpacity onPress={handle_home} ><Text style={[styles.btn, {backgroundColor: '#223175'}]}>Login</Text></TouchableOpacity>
      <Text>or</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <AntDesign name='google' size={28}/>
        <FontAwesome name='facebook' size={28}/>
      </View>
      </View>
      <View style={{gap: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18}}>Don't have a account? </Text>
      <Text style={{ fontSize: 20}} onPress={() => navigation.navigate('Sign up')}>Register</Text>
      </View>
    </LinearGradient>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  food_head:{
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20,
  },
  Form:{
    backgroundColor: '#1D102D',
    gap: 20,
    paddingHorizontal: 25,
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center'

  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input:{
    width: 270,
    height: 55,
    backgroundColor: '#1D102D',
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff !important',
  },
  btn:{
    width: 250,
    padding: 15,
    fontWeight: 'bold',
    backgroundColor: 'olive',
    textAlign: 'center',
    borderRadius: 7
},
})