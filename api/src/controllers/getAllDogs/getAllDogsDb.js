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

        return res.status(200).json(formattedDogs);
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los perros de la base de datos' });
    }
};

module.exports = { getAllDogsDb };
