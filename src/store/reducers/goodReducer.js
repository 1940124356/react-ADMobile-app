import {
    GET_GOOD_LIST
} from '../actionType'

const initState = {
    list:[]
}

export default function goodReducer(state=initState,action){
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_GOOD_LIST:
            newState.list = action.payload  
            return newState;
    
        default:
            return state;
    }
}