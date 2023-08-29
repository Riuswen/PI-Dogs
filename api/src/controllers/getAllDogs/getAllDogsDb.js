const { Dog, Temperament } = require('../../db'); 
const getAllDogsDb = async () => {
    try {
        const dogsFromDb = await Dog.findAll({
            include: Temperament 
        });

        const formattedDogs = dogsFromDb.map(dog => ({
            id: dog.id,
            nombre: dog.name,
            altura: dog.height,
            peso: dog.weight,
            longevidad: dog.life_span,
            temperamentos: dog.Temperaments.map(temp => temp.name) 
        }));

        return formattedDogs;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllDogsDb };
