import {Provider} from 'react-redux';
import ApiScreen from './Config/ApiScreen';
import {PaperProvider} from 'react-native-paper';
import store from './store/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
          <ApiScreen />
        </PaperProvider>
      </Provider>
    </>
  );
};

export default App;
