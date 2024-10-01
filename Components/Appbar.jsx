import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


function AppBar() {
  return (
    <View style={styles.layer}>
      <Text style={styles.textColor}>AppBar</Text>
      <Text style={styles.textColor}>Menu Icon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    layer:{
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textColor: {
      color: '#000',
    }
  })
  

  export default AppBar