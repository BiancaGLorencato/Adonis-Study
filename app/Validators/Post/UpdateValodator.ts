import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { column } from '@ioc:Adonis/Lucid/Orm'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    title: schema.string({ trim: true }),
    content: schema.string({ trim: true })
  })


  public messages = {}
}
