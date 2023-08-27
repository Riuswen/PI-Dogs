const axios = require("axios");
const BASE_URL = 'https://api.thedogapi.com/v1';

const getDogsApi = async () => {
    try{
        const { data } = await axios(`${BASE_URL}/breeds`);
        const dogs = data.map (breed => {
        const idImagen = breed.reference_image_id;
            return {
                id: breed.id,
                nombre: breed.name,
                imagen: (`${BASE_URL}/images/${idImagen}.jpg`),
                altura: breed.height,
                peso: breed.weight,
                longevidad: breed.life_span
            };
        }) 
        return dogs;
       
        }catch(error){
            throw error 
            };
}

module.exports = { getDogsApi }