import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import { BASE_URL } from '../Config/constraints';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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

  <Text style={styles.heading}>Signup</Text>
  <TextInput onChangeText={e => setFirstName(e)} style={styles.input} label='first name'/>
  <TextInput onChangeText={e => setLastName(e)} style={styles.input}  label='last name'/>
  <TextInput label="Email" onChangeText={e => setEmail(e)} style={styles.input}/>
  <TextInput  label="Password" onChangeText={e => setPassword(e)} style={styles.input} secureTextEntry
  right={<TextInput.Icon icon="eye" />} />
  <TouchableOpacity onPress={handle_Signup} ><Text style={[styles.btn, {backgroundColor: '#223175'}]}>Create Account</Text></TouchableOpacity>
  </View>
  <View style={{gap: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
  <Text style={{fontSize: 18}}>Already have a account? </Text>
  <Text style={{ fontSize: 20}} onPress={() => navigation.navigate('LOGIN')}>login</Text>
  </View>
</LinearGradient>

  )
}

export default SignUp

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