import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AuthScreen = () => {

    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Template</Text>
      <Text style={styles.para}>The Easiest way to start with your amazing Application</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LOGIN')}><Text style={styles.btn}>LOGIN</Text></TouchableOpacity>
      <View style={{height: 1, backgroundColor: '#C3C9CF', width: '100%'}}></View>
      <TouchableOpacity onPress={() => navigation.navigate('Sign up')}><Text style={styles.SignUpBtn}>SIGN UP</Text></TouchableOpacity>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 15,
    },
    heading:{
        color: '#000',
        fontSize: 30,
        fontWeight: '700'
        
    },
    para:{
        color: '#000',
        textAlign: 'center'
    },
    btn:{
        width: 200,
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: '#dc2626',
        textAlign: 'center',
        borderRadius: 7
    },
    SignUpBtn: {
        width: 200,
        color: '#000',
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center',

      }
})