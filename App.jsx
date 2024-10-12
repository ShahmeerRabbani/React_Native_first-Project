import ApiScreen from "./Config/ApiScreen";
import { PaperProvider } from "react-native-paper";


const App = () => {


  return(
    <>
    <PaperProvider>
    <ApiScreen/>
    </PaperProvider>
    </>
  )
}

export default App;