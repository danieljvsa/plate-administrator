import Knex from 'knex'

let knex = Knex ({
  client: 'mysql',
  connection: {
    host: Env.get('MYSQL_HOST'),
    port: Env.get('MYSQL_PORT'),
    user: Env.get('MYSQL_USER'),
    password: Env.get('MYSQL_PASSWORD', ''),
    database: Env.get('MYSQL_DB_NAME'),
  }
})

let result = await knex ('users').select ('*')
console.log (result)