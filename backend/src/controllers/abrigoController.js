
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //Definindo o método para listar todos os abrigos
    async index(req, res) {
        const abrigos = await connection('abrigos').select('*');

        return res.json(abrigos);
    },
    //Definindo o método criar para registrar um novo abrigo
    async create(req, res) {
        const { abrigo_nome, email, whatsapp, localidade, uf } = req.body;

        const id = crypto.randomBytes(8).toString('HEX');

        await connection('abrigos').insert({
            id,
            abrigo_nome,
            email,
            whatsapp,
            localidade,
            uf,
        })
        return res.json({ id });
    },
    //Definindo o método editar as informações de um abrigo especifico
    async update(req, res) {
        const { id } = req.params;
        const abrigo_id = req.headers.authorization;
        const abrigos = await connection('abrigos')
            .where('id', id)
            .select('id')
            .first();

        if (abrigos.id !== abrigo_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });

        }
        await connection('abrigos').where('id', id).update({
            abrigo_nome: req.body.abrigo_nome,
            email: req.body.email,
            whatsapp: req.body.whatsapp,
            localidade: req.body.localidade,
            uf: req.body.uf
        });
        return res.status(204).send();
    }
};