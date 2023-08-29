import { GET_DOGS } from "./actions-types"

const initialState = {
    allDogs: [],
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case GET_DOGS:
        return {
            ...state, 
            allDogs: actions.payload
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer;