const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const pets = await connection('pets')
            .join('abrigos', 'abrigos.id', '=', 'pets.abrigo_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'pets.*',
                'abrigos.abrigo_nome',
                'abrigos.email',
                'abrigos.whatsapp',
                'abrigos.localidade',
                'abrigos.uf'
            ]);

        return res.json(pets);
    },
    async create(req, res) {
        const { pet_nome, sexo, idade, tipo } = req.body;
        const abrigo_id = req.headers.authorization;

        const { id } = await connection('pets').insert({
            pet_nome,
            sexo,
            idade,
            tipo,
            abrigo_id,
        });
        return res.json({ id });
    },
    async delete(req, res) {
        const { id } = req.params;
        const abrigo_id = req.headers.authorization;

        const pets = await connection('pets')
            .where('id', id)
            .select('abrigo_id')
            .first();

        if (pets.abrigo_id !== abrigo_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });

        }
        await connection('pets').where('id', id).delete();

        return res.status(204).send();
    },
    async update(req, res) {
        const { id } = req.params;
        const abrigo_id = req.headers.authorization;
        const pets = await connection('pets')
            .where('id', id)
            .select('abrigo_id')
            .first();

        if (pets.abrigo_id !== abrigo_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });

        }
        await connection('pets').where('id', id).update({
            pet_nome: req.body.pet_nome,
            sexo: req.body.sexo,
            idade: req.body.idade,
            tipo: req.body.tipo,
        });
        return res.status(204).send();
    }
};