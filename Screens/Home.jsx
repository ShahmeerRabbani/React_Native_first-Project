import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bottom_Navigation from '../Config/Bottom_Navigation'

const Home = () => {
  return (
    <View>
      <Text style={styles.textColor}>Home</Text>
    </View>
      // <Bottom_Navigation/>
  )
}

export default Home

const styles = StyleSheet.create({
  textColor: {
    color: '#000'
  }
})