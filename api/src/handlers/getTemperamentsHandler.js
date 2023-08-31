const { getTemperamentsFromApi } = require ('../controllers/getTemperaments/getTemperamentsController');

const getTemperamentsHandler = async (req, res) => { 
    try {
        const temperaments = await getTemperamentsFromApi();
        // const savedtemperaments = saveTemperamentsToDb(temperaments); 
        return res.status(200).json(temperaments);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { getTemperamentsHandler };