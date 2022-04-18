import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Plate from 'App/Models/Plate'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class PlatesController {
    public async index(ctx: HttpContextContract) {
        const plates = await Plate.all()
        return ctx.view.render('plates/index', { plates })
    }

    public async show({}: HttpContextContract) {
        const plates = await Plate.all()
        return plates
    }

    public async create(ctx: HttpContextContract) {
        return ctx.view.render('plates/new', { plate: {} })
    }
  
    public async store({request, response, session}: HttpContextContract) {
        const data = await this.validateInput(request)

        await Plate.create({
            plate_number: data.plate_number
        })
        // return response.redirect(`/articles/${article.slug}`)
        session.flash('notification', 'Plate saved.')
        return response.redirect('/plates')
    }
  
    
  
    public async edit({view, params}: HttpContextContract) {
        const plate = await Plate.findBy('id', params.id)
        return view.render('plates/edit', { plate: plate })
    }
  
    public async update({ request, params, response, session }: HttpContextContract) {
        const data = await this.validateInput(request)
        const plate = await Plate.findByOrFail('id', params.id)
        plate.merge({
            plate_number: data.plate_number
        })
        await plate.save()
        session.flash('notification', 'Plate Number saved.')
        return response.redirect('/plates')
    }
  
    public async destroy({params, response, session}: HttpContextContract) {
        const plate = await Plate.findOrFail(params.id)

        await plate.delete()

        session.flash('notification', 'Plate Number erased.')
        return response.redirect('/plates')
    }

    private async validateInput(request) {
        const valSchema = schema.create({
          plate_number: schema.string({ trim: true }, [rules.maxLength(150), rules.required()]),
        })
    
        return await request.validate({
          schema: valSchema,
          messages: {
            'plate_number.required': 'Plate Number is required',
            'plate_number.maxLength': 'Plate Number allows upto 150 characters',
          },
        })
      }
}
