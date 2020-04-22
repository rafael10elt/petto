//Criando as tabelas e definindo as caracteristicas das colunas
exports.up = function (knex) {
    return knex.schema.createTable('abrigos', function (table) {
        table.string('id').primary();
        table.string('abrigo_nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('localidade').notNullable();
        table.string('uf', 2).notNullable();
    });
};

//Função rollback
exports.down = function (knex) {
    return knex.schema.dropTable('abrigos');
};
