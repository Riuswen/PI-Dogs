import axios from 'axios';
import { GET_DOGS } from './actions-types';

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