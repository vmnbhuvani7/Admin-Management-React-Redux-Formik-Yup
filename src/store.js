import { createStore } from 'redux'
import ManagerReducer from './reducers/ManagerReducer'

const store = createStore(ManagerReducer)

export default store