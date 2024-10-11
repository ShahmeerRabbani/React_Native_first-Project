import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'


function AppBar() {
  return (
    <View style={styles.layer}>
      <Text style={styles.textColor}>
       <AntDesign name='antdesign' size={50} color='#f59e0b'/>
      </Text>
      <Text style={styles.textColor}> 
        <Entypo name='menu' size={30}/>
      </Text>
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