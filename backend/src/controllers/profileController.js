const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const abrigo_id = req.headers.authorization;

        const pets = await connection('pets')
            .where('abrigo_id', abrigo_id)
            .select('*');

        return res.json(pets);
    }
};