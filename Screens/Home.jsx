import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, deleteCounter } from '../store/slices/CounterSlice'

const Home = () => {


  const {counter} = useSelector((state) =>state.CounterReducer)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(addCounter())
  }
  const handleDecrement = () => {
    dispatch(deleteCounter())
  }

  return (
    <View>
      <Text style={styles.textColor}>Counter {counter}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.btn}><Text style={{fontSize: 20, fontWeight: 'bold'}}>Add</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleDecrement} style={[styles.btn, {backgroundColor:'tomato'}]}><Text style={{fontSize: 20, fontWeight: 'bold'}}>Delete</Text></TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  textColor: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center'
  },
  btn:{
      width: 100,
      padding: 10,
      borderRadius: 7,
      backgroundColor: '#99f073',
      justifyContent: 'center',
      alignItems: 'center'
  },
})