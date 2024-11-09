import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Order = () => {
  return (
    <LinearGradient 
    colors={['rgba(2,0,36,1)', 'rgba(47,49,120,1)', 'rgba(0,0,0 ,1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.container}>
      <Text>Order</Text>
    </LinearGradient>
  )
}

export default Order

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
})