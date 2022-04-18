import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Plates extends BaseSchema {
  protected tableName = 'plates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('plate_number')      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
