import { CREATE_DOG, GET_DOGS } from "./actions-types"

const initialState = {
    allDogs: [],
    dogs: []
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case GET_DOGS:
        return {
            ...state, 
            allDogs: actions.payload
        }
            case 'FILTER_TEMPERAMENT':
  const selectedTemperament = actions.payload;
  const filteredDogs = state.allDogs.filter(dog => dog.temperaments.includes(selectedTemperament));
  return {
    ...state,
    allDogs: filteredDogs,
        }
        case CREATE_DOG: 
        return {
            ...state,
            dogs: actions.payload
        }
        default:
            return {
                ...state
            }
    }  
}

export default reducer;