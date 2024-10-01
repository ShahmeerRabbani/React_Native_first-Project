import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Card from "./Components/Card";
import { useEffect, useState } from "react";
import AppBar from "./Components/Appbar";


const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

    const getData =async () => {
      await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        alert(err)
      })
    }

    const handleClick = () => {
      alert('This Item add in cart')
    }

  return(
    <>
    <View style={styles.container}>
      <AppBar/>
      <Text style={styles.textColor}>Find Your</Text>
      <Text style={styles.textColor}>match <Text style={{ textDecorationLine: 'underline', color: '#f59e0b', fontSize: 33}}>style!</Text></Text>
      <ScrollView>

      <View style={styles.card_ele}>
        {data.map((e, i) => {
          return (
            <View style={styles.wrapper} key={i}>  
              <Card desc={e.description} title={e.title} image = {e.image} price ={e.price} handleClick={handleClick}/>
            </View>
          )
        })}
      </View>
      </ScrollView>
    </View>
    
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15
  },
  textColor: {
    color: '#000',
    fontSize: 25
  },
  card_ele:{
    marginVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'

  },
  wrapper:{
    marginBottom: 20
  }
})

export default App;