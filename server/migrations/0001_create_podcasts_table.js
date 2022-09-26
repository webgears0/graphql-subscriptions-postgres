exports.up = (knex) => {
  knex.schema.withSchema('postgres-subs').createTable('podcasts', (t) => {
    t.increments('id').primary();
    t.string('title');
    t.string('episode_number');
    t.string('guest');
    t.string('review');
  });
};

exports.down = (knex) => {
  knex.schema.dropTableIfExists('podcasts');
};
