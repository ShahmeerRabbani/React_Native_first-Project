import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchCamera } from 'react-native-image-picker'

const ImagePicker = () => {

  const [clickImg, setClickImg] = useState()

    const Open_camera =async()=>{
        const result = await launchCamera({mediaType: 'photo'})

        if(result){

          const imgResult = result.assets[0].uri
          setClickImg(imgResult)
        }
        console.log(result)
    }

  return (
    <View style={styles.container}>
     {clickImg ?  <ImageBackground style={styles.imageView} source={{uri: clickImg}}/> : null}
      <TouchableOpacity onPress={Open_camera} ><Text style={styles.btn}>Open Camera</Text></TouchableOpacity>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
    btn:{
        width: 200,
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: 'olive',
        textAlign: 'center',
        borderRadius: 7
    },
    imageView:{
      width: 300,
      height: 300,
      // resizeMode: 'cover',
      
    }

})