import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { column } from '@ioc:Adonis/Lucid/Orm'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.unique({table: 'posts', column: 'title'})])
    content: schema.string({ trim: true })
  })


  public messages = {
    'title.unique': 'O {{ field }} precisa ser único',
    required: 'Esse campo é obrigatório '
  }
}
