import logo from './logo.svg';
import './App.css';
import CovidData from './coviddata/coviddata';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CovidData/>
      </Provider>
    </div>
  );
}

export default App;
