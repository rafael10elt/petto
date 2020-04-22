//Criando as tabelas e definindo as caracteristicas das colunas
exports.up = function (knex) {
    return knex.schema.createTable('pets', function (table) {
        table.increments();
        table.string('pet_nome').notNullable();
        table.string('sexo').notNullable();
        table.string('idade').notNullable();
        table.string('tipo').notNullable();

        table.string('abrigo_id').notNullable();
        table.foreign('abrigo_id').references('id').inTable('abrigos');

        // table.string('foto').notNullable();
        // table.string('castrado').notNullable();
    })
};
//Função rollback
exports.down = function (knex) {
    return knex.schema.dropTable('pets');
};
