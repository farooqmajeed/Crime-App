import { createStore } from 'redux'


import AuthReducer from './reducer/authReducer'


export const rootReducer = createStore(AuthReducer)
   
export let store = rootReducer;