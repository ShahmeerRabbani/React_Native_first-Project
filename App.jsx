import { FlatList, Text, View } from "react-native"


const App = () => {
  return(
    <>
    <View style={{height: '100%', backgroundColor: '#f5f5f5',}}>
      <View style={{height: '10%', backgroundColor: '#252525',}}>
      <FlatList
        data={[
          {key: 'Home'},
          {key: 'About'},
          {key: 'Contact me'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
      </View>
      
    </View>
    </>
  )
}

export default App;