import { Alert, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Noodle2 from '../Assets/noodle2.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


const AddToCart = ({route}) => {
  const { id, data } = route.params; 
  const image = data?.img

  return (
    <LinearGradient 
    colors={['rgba(2,0,36,1)', 'rgba(47,49,120,1)', 'rgba(0,0,0 ,1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.container}>
      {
        id == undefined ? (
         <View><Text>Basket is empty</Text></View>
        )
        :
        (
          <>
          <ImageBackground source={{uri: image}} style={{height: 250, width: '100%'}}>
        <View style={styles.header}>
          <View style={styles.iconBox}>
            <Ionicons name='arrow-back' size={22}/>
          </View>
          <View style={{flexDirection: 'row', gap: 20}}>
            <View style={styles.iconBox}>
              <AntDesign name='heart' size={22}/>
            </View>
            <View style={styles.iconBox}>
              <Entypo name='dots-three-horizontal' size={22}/>
            </View>
          </View>
        </View>
      </ImageBackground>
      <LinearGradient  colors={['rgba(0,0,0,0.2896185028419066)', ' rgba(0,0,0,0.6154611994711201)  ',]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }} style={styles.heroDiv}>
        <View style={styles.heroDivOne}>
          <Text style={{fontSize: 26}}>{data?.title}</Text>
          <Text style={{fontSize: 16}}>{data?.Price}</Text>
        </View>
        <View style={styles.heroDivTwo}>
         <Text>{data?.desc}</Text>
         <TouchableOpacity style={styles.order_btn}><Text style={{fontSize: 18, fontWeight: 'bold'}}>Order Now</Text></TouchableOpacity>
        </View>

      </LinearGradient>
       <ScrollView style={{flexDirection: 'column'}}>
      {/* {filteredData?.map((e, i)=>{
        return(
          <View key={i}>
<LinearGradient colors={['rgba(0,0,0,1)', ' rgba(47,49,120,1) ',]}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0 }} style={styles.OrderDetail}>
      <View style={{flex: 1.5, gap: 5,}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{e.title}</Text>
        <Text style={{color: '#919191'}}>{e.desc.slice(0,50)}...</Text>
        <TouchableOpacity onPress={() => handle_cart(e)} style={styles.order_btn}><Text style={{fontSize: 18, fontWeight: 'bold'}}>{e.Price}</Text></TouchableOpacity>
      </View>
      <View style={styles.orderImage}>
        <Image source={{uri: e.img}} style={styles.OrderImg}/>
      </View>
      </LinearGradient>
          </View>
        )
      })} */}
      </ScrollView>
      </>
        )
      }
       
    </LinearGradient>
  )
}

export default AddToCart

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  header:{
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    marginTop: 10
  },
  iconBox:{
    height: 40,
    width: 40,
    borderColor: '#999B9E',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  heroDiv:{
    height: 250,
    width: '90%',
    borderRadius: 20,
    marginHorizontal: 'auto',
    marginTop: -90,
    paddingHorizontal: 20
  },
  heroDivOne:{
    flex: 1,
    justifyContent: 'center',

  },
  heroDivTwo:{
    flex: 1.5,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  order_btn:{
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#4F3CCA',
  justifyContent: 'center',
  alignItems: 'center',
  },
})