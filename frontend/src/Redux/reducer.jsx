import { CREATE_DOG, GET_DOGS, TEMPERAMENT, FILTER_TEMPERAMENT } from "./actions-types"

const initialState = {
    allDogs: [],
    dogs: [],
    temperament: [],
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case GET_DOGS:
        return {
            ...state, 
            allDogs: actions.payload,
            dogs: actions.payload
        }
        
        case FILTER_TEMPERAMENT:
  const selectedTemperament = actions.payload;
  const filteredDogs = state.allDogs.filter(dog => dog.temperamento.includes(selectedTemperament));
  return {
    ...state,
    dogs: filteredDogs,
  };


        case CREATE_DOG: 
        return {
            ...state,
            dogs: actions.payload
        }
       
        case TEMPERAMENT:
            return {
                ...state, temperament: actions.payload
            }

            default:
                return {
                    ...state
                }
    }  
    
}

export default reducer;