const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const abrigo = await connection('abrigos')
            .where('id', id)
            .select('abrigo_nome')
            .first();

        if (!abrigo) {
            return res.status(400).json({ error: 'Abrigo não encontrado!' });

        }
        return res.json(abrigo);
    }
}