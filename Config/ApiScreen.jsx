import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack_Navigation from './Stack_Navigation'

const ApiScreen = () => {
  return (
    <>
      <NavigationContainer>
      <Stack_Navigation/>
    </NavigationContainer>
    </>
  )
}

export default ApiScreen

const styles = StyleSheet.create({})