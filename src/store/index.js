//combineReducers       辅助函数把一个由多个不同的reducer函数作为value的object，合并成一个最终的reducer函数
import { createStore,combineReducers,applyMiddleware } from 'redux'

import homeReducer from './reducers/homeReducer'

//中间件，用于支持redux中的异步action
import thunk from 'redux-thunk'

const reducer = combineReducers({
    home:homeReducer
})






const store = createStore(reducer,applyMiddleware(thunk))

export default store