
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Users from './Users'

export default class Plate extends BaseModel {
  @column({ isPrimary: true })
  public plate_id: number

  @column()
  public plate_number:String

  @column()
  public userId: number

  @belongsTo(() => Users)
  public users: BelongsTo<typeof Users>

}
