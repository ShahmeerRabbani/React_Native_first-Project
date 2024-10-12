import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'



const CardComponent = ({desc, title, price, image, handleClick}) => {
  return (

    <Card>
    <Card.Content>
    <Card.Cover source={{ uri: image }} />
      <Text variant="titleLarge" style={styles.title}>{title.slice(0, 20)}...</Text>
      <Text variant="bodyMedium">{desc.slice(0, 50)}...</Text>
      <Card.Actions>
      <Button style={styles.btnColor} onPress={handleClick}>Add Card</Button>
    </Card.Actions>
    </Card.Content>
  </Card>

   
  )
}



export default CardComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnColor: {
    borderColor: '#f59e0b'
  }
})



// <ImageBackground
   // source={{uri:image}}
   //  style={styles.card}>
   //   <View style={styles.overlay}>
   //   <Text style={styles.txt}>{title.slice(10)}</Text>
   //   <Text style={{color: 'red', fontSize: 24, textAlign: 'center'}}>${price}</Text>
   //   <TouchableOpacity style={{alignItems: 'center'}}><Text style={styles.btn} onPress={handleClick}>Add me</Text></TouchableOpacity>
   //   </View>
   // </ImageBackground>


// const styles = StyleSheet.create({
//     card:{
//         height: 250,
//         width: 150,
//         resizeMode: 'cover',
//         borderRadius: 10,
//         overflow: 'hidden',
//         padding: 10
//     },
//     txt:{
//         color: '#000',
//         textAlign: 'center'
//     },
//     btn:{
//       width: 100,
//       padding: 10,
//       backgroundColor: '#dc2626',
//       textAlign: 'center',
//       borderRadius: 7
//     },
//     overlay:{
//       height: '100%',
//       justifyContent: 'flex-end'
//     }
// })