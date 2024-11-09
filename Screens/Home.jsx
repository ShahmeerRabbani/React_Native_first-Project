import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PastaImg from '../Assets/pasta.png'
import Soshi from '../Assets/soshi.png'
import Soshi2 from '../Assets/soshi2.png'


const Home = () => {


  return(
    <LinearGradient 
    colors={['rgba(2,0,36,1)', 'rgba(47,49,120,1)', 'rgba(0,0,0 ,1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.menuDiv}>
          <Entypo name='menu' size={26}/>
         <View>
         <Text>Delivery</Text>
         <Text style={{fontSize: 20}}>Maplewood Suites</Text>
         </View>
        </View>
        <View style={styles.header_box}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <FontAwesome5 name="walking" size={22} style={{backgroundColor: "#2F3585", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10}}/>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Ionicons name='bicycle' size={26}/>
          </View>
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Ionicons name='search' size={26}/>
          <TextInput placeholder='Order'/>
        </View>
        <View>
          <MaterialCommunityIcons name='qrcode-scan' size={16}/>
        </View>
      </View>
      <ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
        <Text>Categories</Text>
        <Text>See all</Text>
      </View>
      <View>
      <ScrollView horizontal style={styles.categories}>
        <View style={styles.sliderParent}>
        <View style={styles.slider}>
        </View>
        <Text>
          Burger
        </Text>
        </View>
        <View style={styles.sliderParent}>
        <View style={styles.slider}>
        </View>
        <Text>
          Burger
        </Text>
        </View>
        <View style={styles.sliderParent}>
        <View style={styles.slider}>
        </View>
        <Text>
          Burger
        </Text>
        </View>
        <View style={styles.sliderParent}>
        <View style={styles.slider}>
        </View>
        <Text>
          Burger
        </Text>
        </View>
        <View style={styles.sliderParent}>
        <View style={styles.slider}>
        </View>
        <Text>
          Burger
        </Text>
        </View>
        <View style={styles.sliderParent}>
        <View style={styles.slider}>
        </View>
        <Text>
          Burger
        </Text>
        </View>
        <View style={styles.sliderParent}>
        <View style={styles.slider}>
        </View>
        <Text>
          Burger
        </Text>
        </View>
        <View style={styles.sliderParent}>
        <View style={styles.slider}>
        </View>
        <Text>
          Burger
        </Text>
        </View>
      </ScrollView>
      </View>
      <View >
        <ScrollView horizontal>

        <LinearGradient
         colors={['rgba(56,37,113,1)', 'rgba(69,26,108,1)', 'rgba(0,0,0,1)']}
         start={{ x: 1, y: 0 }}
         end={{ x: 0, y: 1 }}
         style={styles.Order}>
          <View style={styles.Order_box}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>30% OFF</Text>
            <Text style={{fontSize: 18}}>Discover discounts in your favorite local restaurants</Text>
            <TouchableOpacity style={styles.order_btn}><Text>Order Now</Text></TouchableOpacity>
          </View>
          <View style={{height: 150, width: 150,  position: 'absolute', right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../Assets/pasta.png')} resizeMode='cover' style={styles.image}/>
          </View>
        </LinearGradient>


        <LinearGradient
         colors={['rgba(56,37,113,1)', 'rgba(69,26,108,1)', 'rgba(0,0,0,1)']}
         start={{ x: 1, y: 0 }}
         end={{ x: 0, y: 1 }}
         style={styles.Order}>
          <View style={styles.Order_box}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>30% OFF</Text>
            <Text style={{fontSize: 18}}>Discover discounts in your favorite local restaurants</Text>
            <TouchableOpacity style={styles.order_btn}><Text>Order Now</Text></TouchableOpacity>
          </View>
          <View style={{height: 150, width: 150,  position: 'absolute', right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../Assets/pasta.png')} resizeMode='cover' style={styles.image}/>
          </View>
        </LinearGradient>


        <LinearGradient
         colors={['rgba(56,37,113,1)', 'rgba(69,26,108,1)', 'rgba(0,0,0,1)']}
         start={{ x: 1, y: 0 }}
         end={{ x: 0, y: 1 }}
         style={styles.Order}>
          <View style={styles.Order_box}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>30% OFF</Text>
            <Text style={{fontSize: 18}}>Discover discounts in your favorite local restaurants</Text>
            <TouchableOpacity style={styles.order_btn}><Text>Order Now</Text></TouchableOpacity>
          </View>
          <View style={{height: 150, width: 150,  position: 'absolute', right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../Assets/pasta.png')} resizeMode='cover' style={styles.image}/>
          </View>
        </LinearGradient>
          </ScrollView>
      </View>
      <Text style={{marginTop: 20, fontSize: 22, fontWeight: 'bold'}}>Fastest near you</Text>

      <ImageBackground source={Soshi} style={styles.displayBox}>
        <TouchableOpacity style={[styles.order_btn]}><Text>Order Now</Text></TouchableOpacity>
      </ImageBackground>
      <ImageBackground source={Soshi2} style={styles.displayBox}>
        <TouchableOpacity style={[styles.order_btn]}><Text>Order Now</Text></TouchableOpacity>
      </ImageBackground>
      <ImageBackground source={Soshi} style={styles.displayBox}>
        <TouchableOpacity style={[styles.order_btn]}><Text>Order Now</Text></TouchableOpacity>
      </ImageBackground>
      <ImageBackground source={Soshi2} style={styles.displayBox}>
        <TouchableOpacity style={[styles.order_btn]}><Text>Order Now</Text></TouchableOpacity>
      </ImageBackground>

      </ScrollView>
    </LinearGradient>

  )
}

export default Home


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 15
  },
  header:{
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuDiv:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  header_box:{
    width: 100,
    height: 50,
    backgroundColor: '#1D102D',
    flexDirection: 'row',
    padding: 5,
    borderColor: '#B3AAAF', 
    borderWidth: 1,
    borderRadius: 10,
  },
  searchBar:{
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categories:{
    marginTop: 20,
  },
  sliderParent:{
    alignItems: 'center',
    gap: 5, 
    marginRight: 10,
  },
  slider:{
    height: 70, 
    width: 70,
    borderRadius: 10,
    backgroundColor: '#171030',
    borderColor: '#B3AAAF',
    borderWidth: 0.5,
  },

  Order: {
    height: 180,
    width: 300,
    backgroundColor: '#171030',
    marginTop: 30,
    borderRadius: 20,
    borderColor: '#B3AAAF',
    padding: 20,
    borderWidth: 0.5,
    flexDirection: 'row',
    position: 'relative',
    overflow: 'hidden',
    marginRight: 20
  },
  
  Order_box:{
    flex: 1,
    gap: 5,
    zIndex: 1
  },
  order_btn:{
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#4F3CCA',
  justifyContent: 'center',
  alignItems: 'center',
  },
  image:{
    height: 200,
    width: 200,
  },
  displayBox:{
    height: 250,
    width: '100%',
    backgroundColor: '#B3AAAF',
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 20,
  }

})