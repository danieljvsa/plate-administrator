import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Plates extends BaseSchema {
  protected tableName = 'plates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('plate_id').primary()
      table.string('plate_number')   
      table.integer('user_id').unsigned().references('users.user_id').onDelete('CASCADE')   
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
