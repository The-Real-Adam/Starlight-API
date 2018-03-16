
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cans", (table) => {

    table.increments()

    table.varchar("name", 10)
      .notNullable()
      .defaultTo("")

    table.varchar("serial", 10)
      .notNullable()
      .defaultTo("")

    table.varchar("size", 10)
      .notNullable()
      .defaultTo("")

    table.integer("requiresMaintenance")
      .notNullable()
      .defaultTo(0)

    table.integer("outOfService")
      .notNullable()
      .defaultTo(0)

    table.varchar("source", 30)
      .notNullable()
      .defaultTo("")

    table.varchar("startDate", 30)
      .notNullable()
      .defaultTo("")

    table.integer("hazardous")
      .notNullable()
      .defaultTo(0)

    table.varchar("action", 30)
      .defaultTo(null)

    table.varchar("timestamp", 30)
      .notNullable()
      .defaultTo("")

    table.varchar("createdBy", 30)
      .defaultTo(null)

    table.varchar("createdDate", 30)
      .notNullable()
      .defaultTo("")

    table.varchar("modifiedBy", 30)
      .defaultTo(null)

    table.varchar("modifiedDate", 30)
      .notNullable()
      .defaultTo("")

    table.varchar("attachment", 10)
      .notNullable()
      .defaultTo("")

    table.integer("deleted")
      .notNullable()
      .defaultTo(0)

    table.timestamps(true, true)

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cans")
};
