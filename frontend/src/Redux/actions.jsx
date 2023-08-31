import axios from 'axios';
import { GET_DOGS, CREATE_DOG } from './actions-types';

export const fetchDogs = () => {
    const endpoint = 'http://localhost:3001/dogs'
    return async (dispatch) => {
        try {
            const { data } = await axios (endpoint);
            console.log(data);
            return dispatch({
                type: GET_DOGS,
                payload: data,
            })
        } catch (error) {
            console.error(error.message)
        }
    }
}
export const filterByTemperament = (selectedTemperament) => {
            return {
              type: 'FILTER_BY_TEMPERAMENT',
              payload: selectedTemperament,
            };
          };

export const createDog = (dogData) => async (dispatch) => {
    try {
        await axios.post(`http://localhost:3001/dogs/`, dogData);
        dispatch(fetchDogs()); // Aquí se llama a fetchDogs para actualizar la lista de perros
      } catch (error) {
        alert(error.message);
      }
};          

