import {restReducer} from '../reducers/Reducer';


const { createStore, combineReducers, applyMiddleware } = require("redux") 
const { default: thunk } = require("redux-thunk")


const reducers=combineReducers({restReducer})


const middleware=[thunk]


const store=createStore(reducers,applyMiddleware(...middleware))

export default store