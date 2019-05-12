import { createStore, applyMiddleware,combineReducers } from 'redux'
import reducer from './reducer'
import listReducer from '../redux/showList/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  count: reducer,
  list: listReducer
})
export const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(thunk)
))
console.log(store.getState())













