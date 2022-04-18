
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Plate extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public plate_number:String

}
