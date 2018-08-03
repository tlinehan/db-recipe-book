
exports.up = function(knex, Promise) {
  //create the dishes table
  return knex.schema.createTable('dishes', function(tbl) {
    //primary key
    //default to id, can also increments(dishes_id)
    tbl.increments();//creates id field, makes it int, makes auto-increment, primary key
    //other fields
    //50 is number of characters
    tbl
      .string('name', 50)
      .notNullable().unique()
      .defaultTo('Not Provided');
  });
};

exports.down = function(knex, Promise) {
  //drop (delete) the dishes table
  return knex.schema.dropTableIfExists('dishes');
};
