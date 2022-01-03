import {createStore} from 'redux';
import reducer from './reducers/index';

const ConfigureStore = (initialState) => {
  return createStore(reducer, initialState);
}

export default ConfigureStore;