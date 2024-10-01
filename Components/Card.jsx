import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
// import img from '../Assets/native.jpeg'

const Card = ({desc, title, price, image, handleClick}) => {
  return (
    <ImageBackground
    source={{uri:image}}
     style={styles.card}>
      <View style={styles.overlay}>
      <Text style={styles.txt}>{title.slice(10)}</Text>
      <Text style={{color: 'red', fontSize: 24, textAlign: 'center'}}>${price}</Text>
      <TouchableOpacity style={{alignItems: 'center'}}><Text style={styles.btn} onPress={handleClick}>Add me</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    card:{
        height: 250,
        width: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10
    },
    txt:{
        color: '#000',
        textAlign: 'center'
    },
    btn:{
      width: 100,
      padding: 10,
      backgroundColor: '#dc2626',
      textAlign: 'center',
      borderRadius: 7
    },
    overlay:{
      height: '100%',
      justifyContent: 'flex-end'
    }
})

export default Card