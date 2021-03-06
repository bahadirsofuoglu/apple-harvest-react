import { reducer } from './reducers'
import { combineReducers, createStore } from 'redux'

const reducers = combineReducers({
  reducer: reducer
})

export const store = createStore(reducers)
