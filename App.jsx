import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack_Navigation from "./Config/Stack_Navigation";


const App = () => {

  const Stack = createNativeStackNavigator()

  return(
    <>
    <NavigationContainer>
      <Stack_Navigation/>
    </NavigationContainer>
    {/* <AuthScreen/> */}
   {/* <Bottom_Navigation/> */}
    </>
  )
}

export default App;