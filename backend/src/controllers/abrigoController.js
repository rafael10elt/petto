const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const abrigos = await connection('abrigos').select('*');

        return res.json(abrigos);
    },
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
    }
};